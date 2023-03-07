const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String], description: String!, bookId: Int!, image:, link: String, title: String!): User
    removeBook(bookId: Int!): User
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    authors: [String]
    description: String!
    bookId: ID!
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

`;

module.exports = typeDefs;
