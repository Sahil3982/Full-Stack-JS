import gql from 'graphql-tag';

const typeDefs = gql`

    type Product {
        id: ID!,
        name: String!,
        description: String!,
        price: Float!,
        category: String!,
        stock: Int!,
        ratings: Float!
    }
    type Query {
        products: [Product]!,
        product(id: ID!): Product
    }
    
    `;

module.exports = { 
    typeDefs
};

