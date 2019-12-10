const express = require('express')
const app = express()
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');

const schema = require('./graphQL/schema')
const rootValue = require('./graphQL/resolvers')
const setupDB = require('./mongoDB/connect')

const port = 3000

const exObj = {
    aha: 'waha',
    ahju: 'brawaha',
    wataha: 'deeswaha',
    machaaha: 'defssswaha',

}

// create a route that sends json back
app.route('/')
    .get( (req, res) =>{
        res.json(exObj)
    })

// conect to mongoose
// mongoose.connect('mongodb://localhost:27017/my_db', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).catch( error => console.log(error))

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

setupDB()

// graphql api 
app.use('/graphql', graphqlHTTP({ // graphql server 
    schema, // well, schema :)
    rootValue, //resolvers 
    graphiql: true,
}));


app.listen(port, () => console.log(`App listening on port ${port}!`))