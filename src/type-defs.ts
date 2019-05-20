import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    city: String
    about: String
    followers: [User!]!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    publishedOn: String!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    posts: [Post!]!
    post(id: String!): Post
    users: [User!]!
    user(id: String!): User
  }

  type Mutation {
    addUser(name: String!): User
  }
`;
