import fs from 'fs'
import path from 'path'
import BaseController from './server/utils/baseController'
import { logger } from './server/utils/Logger'


export class Paths {
  static get Public() {
    return path.join(__dirname, 'client')
  }

  static get Server() {
    return path.join(__dirname, 'server')
  }

  static get Controllers() {
    return this.Server + '/Controllers'
  }


}

export function RegisterControllers(router) {
  const controllers = fs.readdirSync(Paths.Controllers)
  controllers.forEach(loadController)
  async function loadController(controllerName) {
    try {
      if (!controllerName.endsWith('.js')) return
      const fileHandler = await import(Paths.Controllers + '/' + controllerName)
      let ControllerClass = fileHandler[controllerName.slice(0, -3)]
      if (!ControllerClass) {
        throw new Error(`${controllerName} The exported class does not match the filename`)
      }
      if (ControllerClass.default) {
        ControllerClass = ControllerClass.default
      }
      const controller = new ControllerClass()
      if (controller instanceof BaseController) {
        router.use(controller.mount, controller.router)
      }
    } catch (e) {
      logger.error(
        '[CONTROLLER ERROR] unable to load controller, potential duplication, review mount path and controller class name, and see error below',
        controllerName,
        e
      )
    }
  }
}


