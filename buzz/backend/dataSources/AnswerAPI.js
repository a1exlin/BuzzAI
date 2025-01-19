// Handles database operations 
class AnswerAPI {
    constructor({AnswerModel}) {
        this.AnswerModel =AnswerModel;
    }
    async findAnswerByQuestion(question) {
        return await this.AnswerModel.findOne({question});
    }
    async addAnswer({question, answer}) {
        const newAnswer = new this.AnswerModel({question, answer});
        return await newAnswer.save();
    }
}

export default AnswerAPI;