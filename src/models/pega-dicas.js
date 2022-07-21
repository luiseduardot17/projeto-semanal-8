import db from '../database/db.js'

export default class TipsModel {

    insereDicas= (dicas) => {
        db.dicas.push(dicas)
    }

    pegaDicas = ()=> {
        return db.dicas
    }

}
