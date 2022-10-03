var { buildSchema } = require('graphql');
var { graphqlHTTP } = require('express-graphql');

const users= [
  {
    id                : 1,
    lastName          : 'Larios',
    isMiliary         : true,
    timeCreate        : '10/2/30',
    isTemporal        : 'false',
    username          : 'David' ,
    password          : 'pass1234',
    email             : 'tomismo@gmail.com',
    emailVerified     : 'ddddd',
    verificationToken : 'aaaaaa',
  },
  {
    id                : 2,
    lastName          : 'Pautt',
    isMiliary         : true,
    timeCreate        : '10/2/30',
    isTemporal        : 'false',
    username          : 'Jordan' ,
    password          : 'pass1234',
    email             : 'Jordan@gmail.com',
    emailVerified     : 'ddddd',
    verificationToken : 'aaaaaa',
  }
];

// const typeDocuments = [
//   {
//     id               : 1,
//     nameTypeDocument : 'Cedula'
//   },
//   {
//     id               : 1,
//     nameTypeDocument : 'Passport'
//   }
// ];

const getUser=(id)=>({
  id                : 1,
  lastName          : 'Larios',
  isMiliary         : true,
  timeCreate        : '10/2/30',
  isTemporal        : 'false',
  username          : 'David' ,
  password          : 'pass1234',
  email             : 'tomismo@gmail.com',
  emailVerified     : 'ddddd',
  verificationToken : 'aaaaaa',
})

const userSchema = buildSchema(`
 type User {
   id: ID!
   lastName: String
   isMiliary: Boolean
   timeCreate: String
   isTemporal: Boolean
   username: String 
   password: String
   email: String
   emailVerified: String
   verificationToken : String
 }
  type Query {
    allUser: [User]!
    getUserById(id: ID!): User
  }
`);

//const typeDocument = buildSchema(`
//  type TypeDocument {
//    id: Int
//    nameTypeDocument: String
//   }

//   type query {
//     typeDocument: [TypeDocument]
//   }
// `);

// const typeDocumentQueries = {
//   typeDocuments: ()=> typeDocuments
// }

const userQueries = { 
  allUser     : ()=> users, 
  getUserById : (id)=>{
    return getUser(id);
  }
};
const model = graphqlHTTP({
  schema    : userSchema,
  rootValue : userQueries,
  context   : { startTime: Date.now() },
  graphiql  : true,
})

module.exports = model;

