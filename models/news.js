const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    imageUrl: String,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

const News = mongoose.model('News', newsSchema);
module.exports = News;