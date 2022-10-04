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
   createAt: String
   document: Document!
   typeDocument: TypeDocument!
   contactInfo : ContactInfo!
   country: Country!
 }

 type Document {
   id: Int
   userId: Int
   document: String
   typeDocumentId: Int
   placeExpedition: String
   dateExpedition: String
   typeDocument: TypeDocument!
 }

 type TypeDocument {
   id: Int
   nameTypeDocument: String
  }

 type ContactInfo {
   id: Int! 
   userId: Int
   address: String
   countryId: Int
   city: String
   phone: String
   celPhone: String
   emergencyName: String,
   emergencyPhone: String
   country: Country!
 }

 type Country {
  id: Int!
  countryCode: String
  countryName: String
 }

input UserData {
  lastName: String!
  isMilitary: Boolean!
  isTemporal: Boolean!
  username: String!
  password: String!
  email: String!
  emailVerified: String!
  verificationToken: String!
}

input DocumentData {
  document: String
  typeDocumentId: Int
  placeExpedition: String
  dateExpedition: String
}

input ContactInfoData {
  address: String
  countryId: Int
  city: String
  phone: String
  celPhone: String
  emergencyName: String
  emergencyPhone: String
}

 type Mutation {
   createUser(
    user: UserData!
    documents: DocumentData!
    contact: ContactInfoData!
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
    createUser  : async(userInformation)=> await userService.createUser(userInformation),
    deleteUser  : async(id)=> await userService.deleteUser(id)
}

const model = graphqlHTTP({
  schema    : schema,
  rootValue : resolvers,
  pretty    : true,
  context   : { startTime: Date.now() },
  graphiql  : true,
})

module.exports = model;

