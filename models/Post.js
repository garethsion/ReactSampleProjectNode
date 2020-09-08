const mongoose = require('mongoose');

var orderDetailsSchema = new mongoose.Schema({
    orderName: {
      type: String,
      required: true 
    },
    orderId: {
      type: String,
      required: true 
    },
    orderSummary: {
      type: String,
      required: true 
    }
});

var itemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  unitPrice: {
    type: Number,
    required: true
  },
  itemTotal: {
    type: Number,
    required: true
  }
});

const POSchema = mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String, 
      required: true
    },
    subtotal: {
      type: Number,
      required: true
    },
    shipping: {
      type: Number,
      required: true
    },
    tax: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true 
    },
    orderDetails: [orderDetailsSchema],
    items: [itemSchema], 
    shipTo: {
      type: String,
      required: true
    },
    shippingAddress: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    raisedBy: {
      type: String,
      required: true
    },
    creationDate: {
      type: Date,
      required: true
    },
    lastModifiedDate: {
      type: Date,
      required: true
    }
  })

  module.exports = mongoose.model('Posts', POSchema)