import mongoose from "mongoose";

const Additional = new mongoose.Schema({
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
}, { collection: 'topics' });

export default mongoose.model('Additional', Additional);