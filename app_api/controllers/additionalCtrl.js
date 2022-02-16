import Additional from '../models/additional.js';
import errorHandler from '../utils/errorHandler.js';

class AdditionalController {
    async getAllTopics(req, res) {
        try {
            const topics = await Additional.find();
            return res.json(topics);
        } catch (e) {
            errorHandler(res, e);
        }
    }

    async getOneTopic(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                res.status(400).json({message: 'ID не указан'})
            }
            const topic = await Additional.findById(id);
            return res.json(topic);
        } catch (e) {
            errorHandler(res, e);
        }
    }
}

export default new AdditionalController();