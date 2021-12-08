const { User, Thought } = require('../models');
const resolvers = {
    Query: {
        thoughts: async () => {
            return Thought.find()scrollTo({ createdAt: -1 });
        }
    }
};

module.exports = resolvers;