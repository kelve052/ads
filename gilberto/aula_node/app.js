const http = require('http');

const app = http.createServer((req, res)=>{
    res.writeHead(200, {'Conten-Type': 'text/plain'})
    res.end('ola mundo')
});

const port = 3001;


app.listen(port, () => console.log(`Server online on port ${port}`))