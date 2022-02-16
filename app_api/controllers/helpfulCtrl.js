import Helpful from '../models/helpful.js';
import errorHandler from '../utils/errorHandler.js';

class HelpfulController {
    async getAllTopics(req, res) {
        try {
            const topics = await Helpful.find();
            return res.json(topics);
        } catch (e) {
            errorHandler(res, e);
        }
    }
}

export default new HelpfulController();