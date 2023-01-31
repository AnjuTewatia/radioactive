const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: String,
        image1: String,
        image2: String,
        image3: String,
        image4: String,
        price: Number,
        soldby: String,
        quantity: Number,
        category: String,
        code: String
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = Product = mongoose.model("product", productSchema);

// "id": 209,
//       "image1": "https://img.shop.com/Image/280000/287200/287278/products/1899928063__800x800__.jpg",
//       "image2": "https://img.shop.com/Image/280000/287200/287278/products/alt_810740696.jpg?plain&size=3264x3264",
//       "image3": "https://img.shop.com/Image/280000/287200/287278/products/alt_810740697.jpg?plain&size=1668x1668",
//       "image4": "https://img.shop.com/Image/280000/287200/287278/products/alt_810740698.jpg?plain&size=685x685",
//       "title": "Foot Detox Relief Pads - Natural and Organic Cleanse Patch, Remove Toxins from Body & Feet - 28pc Deluxe Set",
//       "soldby": "Your Store Online",
//       "price": "12.95",
//       "code": "Q2CR4",
//       "category": "health"