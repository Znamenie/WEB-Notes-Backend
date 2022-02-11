import mongoose from "mongoose";

const Helpful = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    url: {
        type: String,
        required: true
    },
    urlPreview: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {collection: 'helpful'});

export default mongoose.model('Helpful', Helpful);