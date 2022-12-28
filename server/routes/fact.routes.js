const FactController = require('../controllers/facts.controller')

module.exports = function(app){
    app.post('/api/create', FactController.createFact)
    app.get('/api/facts', FactController.getAllFacts)
    app.get('/api/getOne/:id', FactController.getOneFact)
    app.put('/api/fact/:id', FactController.updateFact)
    app.delete('/api/delete/:id',FactController.deleteFact)
    app.post('/api/user/create',FactController.createUser)
}