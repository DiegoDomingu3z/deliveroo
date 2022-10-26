
import express from 'express'
import { RegisterControllers } from '../../Setup'

export class StartUp {


    static ConfigureRoutes(app) {
        const router = express.Router()
        RegisterControllers(router)

        app.use(router)


    }


}


