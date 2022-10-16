import { createServer } from "@graphql-yoga/node";
import members from "./members";

const server = createServer({
  schema: {
    typeDefs: /* GraphQL */ `
      type Query {
        allMembers: [Member]!
      }

      type Member {
        id: ID!
        firstName: String!
        lastName: String!
        title: String!
        avatar: String!
        experience: Int!
        colleagues: [Member]!
      }
    `,
    resolvers: {
      Query: {
        allMembers: () => {
          if (Math.random() < 0.7) {
            return [];
          }

          return members.map(member => ({
            ...member,
            colleagues: () =>
              member.workedWith.map(memberId =>
                members.find(m => m.id === memberId)
              ),
          }));
        },
      },
    },
  },
});

server.start();
