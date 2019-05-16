import { ApolloServer, IResolvers } from "apollo-server";
import { typeDefs } from "./type-defs";
import { Book, books, authors, Author } from "./data";

const resolvers: IResolvers = {
  Query: {
    books: function(): Book[] {
      return books;
    },
    authors: function(): Author[] {
      return authors;
    },
    book: function(_, { id }): Book {
      return books.find(book => book.id == id);
    }
  },
  Book: {
    author: function({ authorId }: Book): Author {
      return authors.find(author => author.id == authorId);
    }
  },
  Author: {
    books: function({ id: authorId }: Author): Book[] {
      return books.filter(book => book.authorId == authorId);
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
