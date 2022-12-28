const express = require ('express')
const cors = require ('cors')
const app = express()

require('./server/config/mongoose.config')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = 8000

const factsApp = require('./server/routes/fact.routes')
factsApp(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );