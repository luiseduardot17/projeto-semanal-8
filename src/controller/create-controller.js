import db from "../database/db";
import TipsModel from "../models/pega-dicas";

const controllerCreate = (app) => {
    const tipsModel = new TipsModel()
    app.get('/tips', (req, res) => {
        const dicas = tipsModel.pegaDicas()
        res.json({
            "Dica": dicas(Math.ramdom())
        })
    })

    app.post('/create', (req, res) => {
        const body = req.body
        db.tips.push(body.tips)
        res.json({
            "msg": "Dica inserida!"
        })
    })
}

export default controllerCreate