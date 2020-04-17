const mongoose = require('mongoose')

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords:{
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
})
const trackSchema = new mongoose.Schema({
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    name:{
        type: String,
        default: ''
    },
    locations: [pointSchema]
})

//Typing up some collection of MongoDB to Mongoose.
mongoose.model('Track',trackSchema)