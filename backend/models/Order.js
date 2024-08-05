const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quaantity: { type: Number, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  }
)

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    orderItems: [orderItemSchema],
    shippingAdress: {
      adress: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true, default: Paypal },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      updated_time: { type: String },
      email_adress: { type: String },
    },
    taxprice: {
      type: Number,
      requiered: true,
      default: 0.0,
    },
    shippingPrice: {
      type: Number, 
      requiered: true,
      default: 0.0,
    },
    totalprice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);