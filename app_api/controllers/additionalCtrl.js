import Additional from '../models/additional.js'

class AdditionalController {
    async getAllTopics(req, res) {
        try {
            const topics = await Additional.find();
            return res.json(topics);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new AdditionalController();