const explanations = require('../data/explanations');

const resolvers = {
    Query: {
        explanations: () => explanations
    }
};

module.exports = resolvers;