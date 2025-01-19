const resolvers = {
    Query: {
        getAnswer: async(__, {question}, {dataSources}) =>{
            return await data.dataSources.answerAPI.findAnswerByQuestion(question);
        },
    },

    Mutation: {
        addQuestionAnswer: async(__,{question, answer,} , {dataSources}) =>{
            return await dataSources.answerAPI.addAnswer({question, answer})
        },
    },
}
export default resolvers;

// Define the logic for queries and mutations here.