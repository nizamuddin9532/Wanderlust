const mongoose = require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://thumbs.dreamstime.com/z/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg?ct=jpeg",
        set: (v) =>
            v ===
            "" ?
            "https://thumbs.dreamstime.com/z/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg?ct=jpeg" : v,
    },
    price: Number,
    location: String,
    country: String,
    reviews: [{

        type: Schema.Types.ObjectId,
        ref: "Review",
    }, ],
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing; // Corrected the typo from 'modules.exports' to 'module.exports'