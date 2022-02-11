import { Router } from "express";
import  HelpfulController from '../controllers/helpfulCtrl.js';

const routerHelpful = new Router();

routerHelpful.get('/', HelpfulController.getAllTopics); 

export default routerHelpful;