import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routerAdditional from "./app_api/routes/additional.js";
import routerHelpful from "./app_api/routes/helpful.js";
import dotenv from 'dotenv'

dotenv.config()
const PORT = 8563;
const DB_URL = process.env.DB_CONNECTION;
const app = express();

const ADDITIONAL_URL = '/api/v0/additional';
const HELPFUL_URL = '/api/v0/helpful';

const options = {
    useUnifiedTopology: true, 
    useNewUrlParser: true
}

// MODULES
app.use(cors());
app.use(express.json());
app.use(express.static('static'));
app.use(ADDITIONAL_URL, routerAdditional);
app.use(HELPFUL_URL, routerHelpful);

// ROUTES
app.get('/', (req, res) => {
    res.status(200).json('Server working')
})

// Connect To DB
async function startApp() {
    try {
        await mongoose.connect(DB_URL, options)
        app.listen(PORT, () => console.log('SERVER STARTED IN PORT ' + PORT));
    } catch (e) {
        console.log(e);
    }
};

// Start to the Connect
startApp();
