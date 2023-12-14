const catchAsyncError = require('../middlewares/catchAsyncErrors')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

console.log('KEY', process.env.STRIPE_SECRET_KEY);

// sTRIPE PAYMENT FELDOLGOZÁS => /api/v1/payment/process
exports.processPayment = catchAsyncErrors(async (req, res, next) => {

    const paymentIntent = await stripe.paymentIntents.create({

        amount: req.body.amount,
        currency: 'usd',

        metadata: { integration_check: 'accept_a_payment' }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_Secret
    })

})


// Stripe API kulcs => /api/v1/stripeapi
exports.sendStripApi = catchAsyncErrors(async (req, res, next) => {

    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY
    })

})