const { gql } = require('apollo-server');

/**
 * A schema is a collection of type definitions (hence "typeDefs")
 * that together define the "shape" of queries that are executed against
 * your data.
 * 
 * The "Explanation" type defines the queryable fields for every explanation in our data source.
 * The "Query" type is special: it lists all of the available queries that
 * clients can execute, along with the return type for each In this
 * case, the "explanations" query returns an array of zero or more Explanations (defined above).
 * */
const typeDefs = gql`
    type Explanation {
        statement: String
        
    }
    
    type Query {
        explanations: [Explanation]
    }
`;

module.exports = typeDefs;