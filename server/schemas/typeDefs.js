//import the gql tagged template function
const { gql } = reuire('apollo-server-express');

//create our typeDefs
const typeDefs = gql `
type Query {
    helloWorld: String
}
`;

//export the typeDefs
module.exports = typeDefs;