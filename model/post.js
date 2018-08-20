const mong = require("mongoose");
const postSche = new mong.Schema({
    title: String,
    content: String,
    postby: {
        type: mong.Schema.Types.ObjectId,
        ref: 'users3',
        default: '5b7ab905745967345c42e4a2'
    }
});

const postModel = mong.model('posts', postSche);

module.exports = postModel;