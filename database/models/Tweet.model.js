const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tweetSchema = schema({
    content: {
        type: String,
        maxlength: [145,'le tweet est trop long'],
        minlength: [5, 'le tweet est top court'],
        required: [ true, "Le contenu ne peut etre vide" ]
    }
}, {
    timestamps: true
})

const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;