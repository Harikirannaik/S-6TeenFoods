const express = require("express");

const router = express.Router();

const Order = require("../models/Orders");

router.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
  await data.splice(0, 0, { Order_date: req.body.order_date });

  let eId = await Order.findOne({ email: req.body.email });
  console.log(eId);

  const images = data.map((item) => item.img);
  if (eId === null) {
    try {
      await Order.create({
        email: req.body.email,
        order_data: [data],
        images: images,
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.send("Server Error", error.message);
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        {
          $push: { order_data: data },
        }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      res.send("Server Error", error.message);
    }
  }
});

router.post("/myOrderData", async (req, res) => {
  console.log("Request received for:", req.body.email);
  // Log the incoming email
  try {
    let myData = await Order.findOne({ email: req.body.email });
    console.log("Fetched Data:", myData); // Log the fetched data
    res.json({ orderData: myData });
  } catch (error) {
    console.error("Error:", error.message); // Log any error messages
    res.status(500).send("Server Error: " + error.message);
  }
});

module.exports = router;
