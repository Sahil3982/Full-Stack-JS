import startStandaloneServer from '@apollo/server/standalone';
import { typeDefs } from './graphql/schema.js';
import { resolvers } from './graphql/resolvers.js';

async function startServer() {
    const server = await startStandaloneServer({
        typeDefs,
        resolvers
    });

    const { url } = await server.listen();
    console.log(``);

}   