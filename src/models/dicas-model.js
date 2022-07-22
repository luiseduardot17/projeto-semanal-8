import db from '../database/db.js'

let id = 0

export default class TipsModel {
    constructor(dica1, dica2, dica3, dica4, dica5, dica6) {
        this.id = id++
        this.dica1 = dica1
        this.dica2 = dica2
        this.dica3 = dica3
        this.dica4 = dica4
        this.dica5 = dica5
        this.dica6 = dica6
    }

    insereDicas = (dicas) => {
        db.dicas.push(this.dica1, this.dica2, this.dica3, this.dica4, this.dica5, this.dica6)
    }

    pegaDicas = () => {
        let aleatorio = Math.floor(Math.random() * db.dicas.length)
        return db.dicas[aleatorio]
    }

}
