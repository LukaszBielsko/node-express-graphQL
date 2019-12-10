const express = require('express')
const app = express()
const db = require('mongoose');
const graphqlHTTP = require('express-graphql');

const schema = require('./graphQL/schema')
const rootValue = require('./graphQL/root')

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

// conect to db
db.connect('mongodb://localhost/my_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// graphql api 
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}));


app.listen(port, () => console.log(`App listening on port ${port}!`))