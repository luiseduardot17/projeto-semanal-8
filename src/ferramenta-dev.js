import express from 'express'
import controllerCreate from './controller/create-controller';
import db from './database/db';

const app = express()
app.use(express.json());
const port = 3000

controllerCreate(app, db)

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})