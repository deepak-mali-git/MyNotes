const mongoose = require('mongoose')
const {Schema} = mongoose


const MessageChema = new Schema({
    name : String,
    email : String,
    message : String
})

const MessageModel = mongoose.model('mynotesMessage',MessageChema,'mynotesMessage')


module.exports = MessageModel;