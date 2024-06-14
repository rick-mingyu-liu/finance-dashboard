import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const ProductSchema = new Schema(
    {
        price: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // get the real value
        },
        expense: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100 // get the real value
        },
        transactions: [
            {
            type: mongoose.Types.ObjectId,
            ref: "Transaction",
            },
        ],
    },
    { timestamps: true, toJSON: { getters: true }}
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
