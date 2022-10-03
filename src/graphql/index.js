const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const userService = require('../services/users/users.services');

const schema = buildSchema(`
 type User {
   id: Int
   lastName: String
   isMilitary: Boolean
   isTemporal: Boolean
   username: String 
   password: String
   email: String
   emailVerified: String
   verificationToken: String
 }

 type TypeDocument {
   id: Int
   nameTypeDocument: String
  }

 type ContactInfo {
   id: Int! 
   userId: Int
   address: String
   country: String
   city: String
   phone: String
   celPhone: String
   emergencyName: String,
   emergencyPhone: String
 }

 type Country {
  id: Int!
  countryCode: String
  countryName: String
 }

 type Mutation {
   createUser(
    lastName: String!
    isMilitary: Boolean!
    timeCreate: String!
    isTemporal: Boolean!
    username: String!
    password: String!
    email: String!
    emailVerified: String!
    verificationToken : String!
   ): User!

   updateUser(
    id: Int!
    lastName: String
    isMilitary: Boolean
    timeCreate: String
    isTemporal: Boolean
    username: String
    password: String
    email: String
    emailVerified: String
    verificationToken: String
   ): User!

   deleteUser(id: Int!): Int!
 }

 type Query {
   getAllUser: [User]!
   getUserById(id: Int!): User
 }
`);

const resolvers = { 
    getAllUser  : async()=> await userService.getAllUsers(),
    getUserById : async(id)=> await userService.getUserById(id),
    createUser  : async(user)=> await userService.createUser(user),
    updateUser  : async({id,...userInformation})=> await userService.updateUser(id,userInformation),
    deleteUser  : async(id)=> await userService.deleteUser(id)
}

const model = graphqlHTTP({
  schema    : schema,
  rootValue : resolvers,
  context   : { startTime: Date.now() },
  graphiql  : true,
})

module.exports = model;

