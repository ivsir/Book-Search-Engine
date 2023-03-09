const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookArgs!): User
    removeBook(bookId: String!): User
  }
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

  input BookArgs {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }

  type Book {
    authors: [String]
    description: String!
    bookId: String!
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
