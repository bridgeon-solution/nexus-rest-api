import { PrismaClient } from "@prisma/client";
import Stripe from "stripe"

const prisma = new PrismaClient();


export const founderPaymnet = async (amount: number, email: string) => {
    const stripeConfig = new Stripe(process.env.STRIPE_KEY);
    try {
        const stripe = await stripeConfig.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: 'inr',
                    product_data: {
                        name: 'Subscription payment'
                    },
                    unit_amount: amount * 100
                },
                quantity: 1
            }
            ],
            success_url: 'http://localhost:4200/payment'
        })
        if (stripe.url) {
            // const founderPayment = await prisma.founders.update({
            //     where: {email: email},
            //     data:{ispaid: true}
            // })
            return stripe.url;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error.message);
    }
}

export default founderPaymnet