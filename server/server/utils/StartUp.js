import { RegisterControllers } from "../../../Setup"
import express from 'express'

export class StartUp {


    static ConfigureRoutes(app) {
        const router = express.Router()
        RegisterControllers(router)

        app.use(router)


    }


}


