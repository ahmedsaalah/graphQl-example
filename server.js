 const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const fs = require('fs')
const port = process.env.PORT||8090
const app = express()


app.use(bodyParser.json() , cors())
const typeDefinition = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const  resolverObject  = require('./resolver')



const {makeExecutableSchema} = require('graphql-tools')

const schema = makeExecutableSchema({typeDefs:typeDefinition, resolvers:resolverObject})

const {graphqlExpress,graphiqlExpress} = require('apollo-server-express')

app.use('/graphql',graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))
app.listen(port, () =>  console.log(`server is up and running ${port}`))