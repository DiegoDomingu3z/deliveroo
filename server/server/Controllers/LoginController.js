import BaseController from "../utils/baseController";





export class LoginController extends BaseController {
    constructor() {
        super('api/login')
        this.router
            .get('', this.getProfile)
    }
    getProfile(req, res, next) {
        try {
            res.send({ server: "this bitch working" })
        } catch (error) {

        }
    }
}