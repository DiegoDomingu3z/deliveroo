import BaseController from "../utils/baseController";
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_...', {
    apiVersion: '2020-08-01',
});

export class StripeController extends BaseController {
    constructor() {
        super('/create-checkout-session')
        this.router
            .post('', this.transaction)
    }
    async transaction(req, res, next) {
        try {
            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        price: '{{PRICE_ID}}',
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                success_url: `${this.router}?success=true`,
                cancel_url: `${this.router}?canceled=true`,
            });

            res.redirect(303, session.url);
        } catch (error) {

        }
    }
}