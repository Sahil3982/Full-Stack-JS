import { products } from './data/products.js';  

const resolvers = {
    Query : {
        products: () => products,
    },

}

module.exports = {  
    resolvers
};
