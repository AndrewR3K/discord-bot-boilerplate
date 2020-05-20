import {helloWorld, pingMe, botInfo} from '../commands/general'
class Router {
    constructor(payload) {
        this.payload = payload
        this.user = payload.user
        this.args = payload.args
        this.command = payload.command
        this.message = payload.message
        this._setuproutes()
    }

    _setuproutes() {
        switch (this.payload.command) {
            case 'hello':
                helloWorld(this.payload)
                break
            case 'ping':
                pingMe(this.payload)
                break
            case 'version': case 'v':
                botInfo(this.payload)
                break
            default:
                this.payload.message.channel.send(`\`\`\`Command Not Found. Use !help for more info\`\`\``)
                break
        }
    }

}
module.exports = Router