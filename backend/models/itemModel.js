import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        availability: { type: Number, required: true },
    }
);


const Item = mongoose.model('Game', itemSchema);

export { Item };