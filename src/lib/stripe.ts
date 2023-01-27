import Stripe from "stripe";

const stripeServerSide = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",
});

export { stripeServerSide };