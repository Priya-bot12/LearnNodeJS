const fs = require('fs');
const http = require('http');

const port = process.env.PORT || 4000;

const server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html');
    console.log(req.url);

    if(req.url =='/')
    {
        res.statusCode = 200;
        res.end('<h1> This is Priya </h1>');
    }else if(req.url == '/about')
    {
        res.statusCode=200;
        res.end('<h1> I am from Mathura</h1>')
    }else if (req.url == '/hello')
    {
        res.statusCode =200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }else{
        res.statusCode = 404;
        res.end('<h1>Not Found</h1>')
    }
});

server.listen(port,()=>{
    console.log(`server is listening on the port ${port}`);
})