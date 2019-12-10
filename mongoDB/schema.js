const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PuppetSchema = new Schema({
    id: ObjectId,
    title: String,
});

module.exports = mongoose.model('Puppet');