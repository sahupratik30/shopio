# Overview
![GitHub Repo stars](https://img.shields.io/github/stars/sahupratik30/shopio)
![Language](https://img.shields.io/badge/OpenSource-❤-red.svg)

**Shopio** is a feature-rich e-commerce app built with **Next.js**, **TypeScript**, **Tailwind CSS**, **NextAuth** for authentication, **Firestore** as the database, and **Stripe** for payment processing. This application offers a delightful shopping experience, featuring product discovery, a responsive cart system, and a secure checkout process.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
  - [Development](#development)
  - [Production](#production)
- [Technologies Used](#technologies-used)
- [Authentication](#authentication)
- [Firestore Integration](#firestore-integration)
- [Stripe Integration](#stripe-integration)
- [Contributing](#contributing)
- [Demo](#demo)
- [Live URL](#live-url)

## Getting Started

### Prerequisites

Ensure you have the following software installed on your machine:

- Node.js (version 18.16.0 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sahupratik30/shopio.git
cd shopio
```
2. Install dependencies:

```bash
npm install
# or
yarn
```

## Features
 - **Authentication**: Utilized **NextAuth** for implementing secure user authentication.
 - **Product Browsing**:  Implemented a search bar for exploring a diverse range of products with a user-friendly interface.
 - **Shopping Cart**: Enabled users to easily manage their selected items in the shopping cart.
 - **Wishlist**: Added the ability for users to create and manage a wishlist of their favorite products.
 - **Database**: Implemented **Firestore**, a flexible and scalable NoSQL database, to store and retrieve data.
 - **Payment Gateway**: Implemented a secure purchase process with **Stripe** integration for payment processing.
 

## Usage

### Development
To run the app in development mode, use the following command:

```bash
npm run dev
# or
yarn dev
```
Visit http://localhost:3000 in your browser to interact with the development version.

### Production
To create production build of the app, use the following commands:

```bash
npm run build
# or
yarn build
```

## Technologies Used
 - Next.js
 - TypeScript
 - Tailwind CSS
 - Redux-Toolkit
 - NextAuth
 - Firestore
 - Stripe

## Authentication
Shopio uses NextAuth for authentication. To set up authentication:

Configure NextAuth in the **app/api/auth/[...nextauth]/route.ts** file and update environment variables in the .env.local file:

```
NEXTAUTH_SECRET=your_nextauth_secret
```
For more info, follow the official [documentation](https://next-auth.js.org/configuration/initialization).

## Firestore Integration
Firestore is used as the database for Shopio. To integrate Firestore:

1. Set up a Firestore project on the [Firebase Console](https://console.firebase.google.com/).
2. Obtain your Firestore credentials.
3. Update the .env.local file with Firestore credentials:

```
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_ID=your_firebase_messaging_id
FIREBASE_APP_ID=your_firebase_app_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
```

## Stripe Integration
Shopio leverages the Stripe API for secure and seamless payment processing. To integrate your own Stripe account:

1. Create a Stripe account.
2. Obtain your Stripe API keys.
3. Update the .env.local file with your Stripe API keys:

```
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```
Run the below commands in your terminal to obtain the `STRIPE_WEBHOOK_SECRET`:

```
stripe login
stripe listen --forward-to localhost:3000/api/webhook
```

Make sure you have Stripe CLI installed before using above commands. To install Stripe CLI follow the [docs](https://stripe.com/docs/stripe-cli).

## Contributing
Any contributions are welcome. If make like this repo make sure you drop a ⭐. 

## Demo
https://github.com/sahupratik30/shopio/assets/80754608/4ec3465d-5f5e-4a08-b327-30cd2bcf6bde

## Live URL
You can view the live demo of the app in this link -> https://shopio-xi.vercel.app/
