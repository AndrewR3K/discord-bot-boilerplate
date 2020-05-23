import {helloWorld, pingMe, botInfo} from '../commands/general'

module.exports = {
    'hello': helloWorld,
    'ping': pingMe,
    'version': botInfo,
    'v': botInfo
}