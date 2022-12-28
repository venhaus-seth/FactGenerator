const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/factsdb', {
    useNewURLParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log('Database connection established for Facts Project'))
    .catch(err =>console.log('There was an error', err))