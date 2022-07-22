import TipsModel from "../models/dicas-model.js"

const controllerCreate = (app) => {
    app.get('/tips', (req, res) => {
        const dica = new TipsModel()
        res.json({
            "dica": dica.pegaDicas()
        }
        )
    })

    app.post('/create', (req, res) => {
        const body = req.body
        const dicas = new TipsModel(body.dica1, body.dica2, body.dica3, body.dica4, body.dica5, body.dica6)
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