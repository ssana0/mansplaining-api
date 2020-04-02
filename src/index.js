const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs/explanation');
const resolvers = require('./resolvers/explanations');

const config = {
    typeDefs,
    resolvers
};

const server = new ApolloServer(config);

server
    .listen()
    .then(
        ({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        }
);
