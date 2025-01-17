const http = require('http');

//PORT is environment varialbe as of now it is not set so we can use 3000
const port = process.env.PORT || 3000; //take the same port as allocated

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    //we can print the req
    console.log(req.url);
    //is used to set an HTTP response header that informs the client (typically a web browser) 
    // about the type of content the server is sending in the response. 
    res.setHeader('Content-Type','text/html');
    res.end('<h1> This is Priya Chauhan</h1> <p> Hey!! how are you?? </p>');
    //we can add if else statements also 
    //if we want server to crash if something is wrong in the code we can use nodemon
});

// the above code will not run as we also need to listen above on a port
server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});

//we can check by typing localhost:3000 on broser