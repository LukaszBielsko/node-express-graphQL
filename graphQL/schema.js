const { buildSchema } = require('graphql');

let schema = buildSchema(`
    type Query { 
        puppets: [Puppet]
        rollDice(numDice: Int!, numSides: Int): [Int]
        catsAgeByName(name: String): Int
    },

    type Puppet {
        name: String
        age: String
    }
`)


// puppets: [Puppet] - returns static data
// rollDice(numDice: Int!, numSides: Int): [Int] - returns data based on the arguments passed


module.exports = schema;