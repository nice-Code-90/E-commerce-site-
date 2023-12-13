const express = require("express");
const router = express.Router();

const {

    processPayment,
    sendStripApi

} = require("../controllers/paymentController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/autH");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/stripeapi").get(isAuthenticatedUser, sendStripApi);

module.exports = router;
