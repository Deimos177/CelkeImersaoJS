const { mongo } = require('mongoose')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const home = new Schema({
    topTitle: {
        type: String
    },
    topSubTitle: {
        type: String
    },
    topTextButton: {
        type: String
    },
    topLinkButton: {
        type: String
    },
    serviceTitle: {
        type: String
    },
    serviceSubTitle: {
        type: String
    },
    firstServiceIcon: {
        type: String
    },
    firstServiceTitle: {
        type: String
    },
    firstServiceDescription: {
        type: String
    },
    secondServiceTitle: {
        type: String
    },
    secondServiceIcon: {
        type: String
    },
    secondServiceDescription: {
        type: String
    },
    thirdServiceTitle: {
        type: String
    },
    thirdServiceIcon: {
        type: String
    },
    thirdServiceDescription: {
        type: String
    },
},{
    timestamps: true,
})

mongoose.model('Home', home)