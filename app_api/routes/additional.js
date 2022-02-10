import { Router } from "express";
import AdditionalController from '../controllers/additionalCtrl.js';

const routerAdditional = new Router();

routerAdditional.get('/', AdditionalController.getAllTopics); 

export default routerAdditional;