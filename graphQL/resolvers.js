const Puppet = require('../mongoDB/schema')

/* DB RESOLVERS */

const setPuppetName = (args) => {
    // const puppet = new Puppet(args);
    const puppet = new Puppet({name: args.name});
    console.log(args)
    console.log(puppet)
    puppet.save(function (err, item) {
        if (err) return console.error(err);
        console.log(item.name + " saved to collection.");
    });
    return puppet
}

const getPuppets = () => {
    return Puppet.find({})
}


/* NON DB RESOLVERS */
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
// resolver that takes an argument 
// has to correspond with schema file 
const catsAgeByName = ({name}) => {
    const cats = [{name: 'filemon', age: 23 }, {name: 'cezary', age:34  }, {name: 'lex', age: 45}]
    return cats.find( cat => cat.name === name ).age
}

const fakeDB = {}

const setName = ({name}) => {
    fakeDB.name = name
    console.log(fakeDB)
    return name
}

const getName = () => {
    return fakeDB.name
}


// resolvers that will be passed as a single object to graphQLHTTP
const root = {
    puppets,
    rollDice,
    catsAgeByName,
    setName,
    getName,
    setPuppetName,
    getPuppets

}

module.exports = root
