import { headers } from "next/headers";
import * as admin from "firebase-admin";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const formatPrivateKey = (key: string) => {
  return key.replace(/\\n/g, "\n");
};

// initialize firebase app
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: formatPrivateKey(
          process.env.FIREBASE_PRIVATE_KEY as string
        ),
      }),
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    })
  : admin.app();

// save order to database
const saveOrder = async (session: Stripe.Checkout.Session) => {
  try {
    await app
      .firestore()
      .collection("users")
      .doc((session.metadata as Stripe.Metadata).email)
      .collection("orders")
      .doc(session.id)
      .set({
        amount: (session.amount_total as number) / 100,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        products: JSON.parse((session.metadata as Stripe.Metadata).products),
      });
  } catch (error) {
    console.log("Error occured while saving order:", error);
  }
};

export async function POST(req: Request) {
  const payload = await req.text();
  const headersList = headers();
  const signature = headersList.get("stripe-signature");

  let event: Stripe.Event | null = null;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
    switch (event?.type) {
      // listen to 'checkout.session.completed' event
      case "checkout.session.completed":
        const session = event.data.object;
        await saveOrder(session);
        return NextResponse.json({ error: false }, { status: 200 });
      default:
        // other events that we don't handle
        return NextResponse.json({ error: false }, { status: 200 });
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return NextResponse.json(
        { error: true, message: err.message },
        { status: 400 }
      );
    }
  }
}
