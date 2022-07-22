import express from 'express'
import controllerCreate from './controller/create-controller.js'

const app = express()
app.use(express.json());
const port = 3000

controllerCreate(app)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})