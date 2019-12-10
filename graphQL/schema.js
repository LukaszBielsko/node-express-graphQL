const { buildSchema } = require('graphql');

let schema = buildSchema(`
    type Query { 
        puppets: [Puppet]
        rollDice(numDice: Int!, numSides: Int): [Int]
        catsAgeByName(name: String): Int
        getName: String
        getPuppets: [Puppet]
    },

    type Mutation {
        setName(name: String): String
        setPuppetName(name: String): Puppet
    },

    type Puppet {
        name: String
        age: String
    }
`)


// puppets: [Puppet] - returns static data

// rollDice(numDice: Int!, numSides: Int): [Int] - returns data based on the arguments passed
// [Int] - returns a list 

// catsAgeByName(name: String): Int
// queryName(argumentPassed: dataTypeOfArgument) : returnedDataType


module.exports = schema;