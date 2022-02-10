import mongoose from "mongoose";

const additional = new mongoose.Schema({
    url: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    topicsNested: {
        type: Array
    }
});

export default mongoose.model('additional', additional);