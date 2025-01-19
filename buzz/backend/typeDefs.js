import {gql} from 'graphql-tag';
const typeDefs = gql`
type Query {
getAnswer(question: String!): Answer
}

type Mutation { 
addQuestionAnswer(question: String!, answer: String!): Answer
}

type Answer{
id: ID!
question: String!
answer: String!
}

`;

export default typeDefs;
