import {helloWorld, pingMe, botInfo} from '../commands/general'
var routes = {
    'hello': helloWorld,
    'ping': pingMe,
    'version': botInfo,
    'v': botInfo
}
module.exports = routes 