import mongoose from "mongoose";
const answerSchema = new mongoose.Schema({
    question:{ type: String, required: true, unique: true},
    answer:{type: String, required: true,},
})

const Answer = mongoose.model('Answer', answerSchema);

export default Answer;

// this file defines the MongoDB for storing question-answer pairs