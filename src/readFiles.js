const fs = require("fs")

fs.readFile('./src/index.html', (err, mPage) => {
    if(err){console.log(err)}
    mainPage = mPage
})