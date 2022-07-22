import TipsModel from "../models/dicas-model.js"

const controllerCreate = (app) => {
    app.get('/tips', (req, res) => {
        const dica = new TipsModel()
        res.json({
                "dicas": dica.pegaDicas()
            }
        )
    })

    app.post('/create', (req, res) => {
        const body = req.body
        const dicas = new TipsModel(body.dica)
            dicas.insereDicas(dicas)
            res.json(
                {
                "msg": "Dica inserida com sucesso",
                "dicas": dicas
                }
            )

    })
}

export default controllerCreate