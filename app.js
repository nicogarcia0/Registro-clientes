const http = require('http');

const server = http.createServer((req, res) => {
    req.body
    switch (req.url){
        case '/':
            res.write('mainPage')
            res.end()
            break
        case '/home':
            res.write('homePage')
            res.end()
            break
        case '/login':
            res.write('loginPage')
            res.end()
            break
        default:
            res.write('404 Not Found')
            res.end()
            break
    }
})

server.listen('80')

console.log('Server succesfully opened in port 80')