import { CartItem } from "@/types";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(req: Request) {
  try {
    const { items, email } = await req.json();

    const transformedItems = items.map((item: CartItem) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      line_items: transformedItems,
      mode: "payment",
      success_url: `${process.env.HOST}/success`,
      cancel_url: `${process.env.HOST}/cart`,
      metadata: {
        email,
        products: JSON.stringify(
          items.map((item: CartItem) => ({
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
          }))
        ),
      },
    });

    return NextResponse.json(
      { success: true, id: session.id },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}
