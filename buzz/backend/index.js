import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import mongoose from 'mongoose';
import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js'; 
import Answer from './models/Answer.js';
import AnswerAPI from './dataSources/AnswerAPI.js';
import connectDB from './config/db.js';

async function startServer (){
    // connects to MongoDB
    await connectDB();
}

// creates Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context:()=>({
        AnswerAPI: new AnswerAPI({AnswerModel: Answer})
    })
})
const{url} = await startStandaloneServer(server,{
listen: {port:4000},
})
console.log(`Server is ready at ${url}`)


startServer();
