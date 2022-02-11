import Helpful from '../models/helpful.js'

class HelpfulController {
    async getAllTopics(req, res) {
        try {
            const topics = await Helpful.find();
            return res.json(topics);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new HelpfulController();