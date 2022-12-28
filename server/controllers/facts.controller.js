const {Fact} = require('../models/models')
const {User} = require('../models/models')

module.exports.createFact = (request,response) => {
    Fact.create(request.body)
        .then(fact=> response.json(fact))
        .catch(err=>response.status(400).json(err))
}

module.exports.createUser = (request,response) => {
    User.create(request.body)
        .then(fact=> response.json(fact))
        .catch(err=>response.status(400).json(err))
}

module.exports.getAllFacts = (request,response) => {
    Fact.find()
        .then(facts => {
            response.json(facts)
            console.log(facts)
        })
        .catch((err) => response.json(err))
}

module.exports.getOneFact = (request,response) => {
    Fact.findOne({_id: request.params.id})
        .then(fact => {
            response.json({oneFact: fact})})
        .catch((err) => response.json(err))
}

module.exports.updateFact = (request,response) => {
    Fact.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedFact => response.json(updatedFact))
        .catch((err) => response.json(err))
}

module.exports.deleteFact = (request,response) => {
    Fact.deleteOne({_id: request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch((err) => response.json(err))
}