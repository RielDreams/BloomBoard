const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const CompletedOrder = new Schema(
    {
        uid: {type: String, required: true},
        products: [
            {productID: {
                type: String
            },
        quantity: {
            type: Number,
            default: 1,
        },
    }
        ],
        amount: {type: number, required: true},
        address: {type: Object},
        paid: {type: Boolean}
      },
      { timestamps: true }
    );