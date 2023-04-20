const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const CompletedOrderSchema = new Schema(
    {
        uid: { type: String, required: true },
        products: [
          {
            productId: {
              type: String,
            },
            quantity: {
              type: Number,
              default: 1,
            },
          },
        ],
        amount: { type: Number, required: true },
        address: {type: Object},
        paid: {type: Boolean}
      },
      { timestamps: true }
    );


    module.exports = mongoose.model('CompletedOrder', CompletedOrderSchema)