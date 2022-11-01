import BaseController from "../utils/baseController";






export class LoginController extends BaseController {
    constructor() {
        super('api/login')
        this.router
            .get('', this.getProfile)
            .post('', this.createFakeData)
    }
    async createFakeData(req, res, next) {
        try {
            const fakeData = await req.body
            return res.send(fakeData)
        } catch (error) {
            next(error)
        }

    }
    getProfile(req, res, next) {
        try {
            res.send({ server: "this bitch working" })
        } catch (error) {

        }
    }
}