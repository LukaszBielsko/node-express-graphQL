const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PuppetSchema = new Schema({
    id: ObjectId,
    name: String,
});

module.exports = mongoose.model('Puppet', PuppetSchema);
