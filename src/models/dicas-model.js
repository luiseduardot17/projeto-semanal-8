import db from '../database/db.js'

let id = 0

export default class TipsModel {
    constructor(dica) {
        this.id = id++
        this.dica = dica
    }

    insereDicas = (dicas) => {
        db.dicas.push(dicas)
    }

    pegaDicas = () => {
        let aleatorio = Math.floor(Math.random() * db.dicas.length)
        return db.dicas[aleatorio]
    }

}
