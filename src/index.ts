import { ApolloServer, IResolvers } from "apollo-server";
import { typeDefs } from "./type-defs";
import { Post, posts, users, User, follower } from "./data";

const resolvers: IResolvers = {
  // All root queries
  Query: {
    posts: function(): Post[] {
      return posts;
    },
    users: function(): User[] {
      return users;
    },
    user: function(_, args): User | undefined {
      return users.find(user => user.id == args.id);
    },
    post: function(_, args): Post | undefined {
      return posts.find(post => post.id == args.id);
    }
  },

  // Resolver for all relations of type "Post"
  Post: {
    author: function(post: Post): User {
      return users.find(user => user.id == post.userId);
    }
  },

  // Resolver for all relations of type "User"
  User: {
    posts: function(user: User): Post[] {
      return posts.filter(post => post.userId == user.id);
    },

    followers: function(user: User): User[] {
      const followerList = follower[user.id];
      if (!followerList) return [];

      return followerList.map(followerId => users.find(user => user.id == followerId));
    }
  },

  // All root mutations
  Mutation: {
    addUser: function(_, args): User {
      const nextId = Math.max(...users.map(x => Number(x.id))) + 1;
      const newUser: User = { id: String(nextId), name: args.name };
      users.push(newUser);
      return newUser;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
