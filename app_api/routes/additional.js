import { Router } from "express";
import AdditionalController from '../controllers/additionalCtrl.js';

const routerAdditional = new Router();

routerAdditional.get('/', AdditionalController.getAllTopics);
routerAdditional.get('/:id', AdditionalController.getOneTopic);

export default routerAdditional;