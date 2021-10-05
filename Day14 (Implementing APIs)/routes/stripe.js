var router = require("express").Router();
const { builtinModules } = require("module");
const stripe = require("stripe")(
  "sk_test_51J0S6WSA1T61xlcfEt25rFDQhudiiNECU9UhMJ6PQ8EkffluqVVC5VlA6zxaa5rjrFdcprsb59zJke9LApzLRdAu00qvoKzdJb"
);
var path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post("/payment", async (req, res) => {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: req.body.price * 100,
          name: "Shopping",
          currency: "usd",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      // mode: "payment",
      success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}?canceled=true`,
    });
    res.redirect(303, session.url);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

module.exports = router;
