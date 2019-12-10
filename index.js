const express = require('express')
const app = express()
const db = require('mongoose');

const port = 3000

const exObj = {
    aha: 'waha',
    ahju: 'brawaha',
    wataha: 'deeswaha',
    machaaha: 'defssswaha',

}

// create a root that sends json back
app.route('/')
    .get( (req, res) =>{
        res.json(exObj)
    })

// conect to db
db.connect('mongodb://localhost/my_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(port, () => console.log(`App listening on port ${port}!`))