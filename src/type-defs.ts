import { gql } from "apollo-server";

export const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    age: Int
    books: [Book!]!
  }

  type Book {
    id: ID!
    title: String!
    author: Author!
  }

  type Query {
    books: [Book!]!
    book(id: String!): Book
    authors: [Author!]!
  }
`;
