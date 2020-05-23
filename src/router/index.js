import routes from './routes'


function route (fnc) {
   (fnc.bind(this))()
}

function Router () {
    // Maintain Commands Context
    route = route.bind(this)

    // Check route
    if (routes[this.command]) {
        route(routes[this.command])
    } else {
        // No routes found
        this.message.channel.send(`\`\`\`Command Not Found. Use !help for more info\`\`\``)
    }   
}
module.exports = Router