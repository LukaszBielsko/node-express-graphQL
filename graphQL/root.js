// non db resolvers
const puppets = () => {
    return [{ name: 'maciek', age: '54' }, { name: 'placek', age: '343' }]
}

const rollDice =  ({ numDice, numSides }) => {
    var output = [];
    for (var i = 0; i < numDice; i++) {
        output.push(1 + Math.floor(Math.random() * (numSides || 6)));
    }
    return output;
}

const catsAgeByName = ({name}) => {
    const cats = [{name: 'filemon', age: 23 }, {name: 'cezary', age:34  }, {name: 'lex', age: 45}]
    return cats.find( cat => cat.name === name ).age

}

// resolvers that will be passed as a single object to graphQLHTTP
const root = {
    puppets,
    rollDice,
    catsAgeByName
}

module.exports = root
