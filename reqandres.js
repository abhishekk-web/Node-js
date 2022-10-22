const https = require('http');

const server = https.createServer((req,res)=>{

    console.log("My name is Abhishek Chatterjee");

    if(req.url==="/home"){
    res.setHeader('Content-header', 'text/html');
    res.write("<html>");
    res.write("<head><title>Welcome home</title></head>");
    res.write("<body><h1>Welcome home</h1></body>");
    res.write("</html>");
    res.end();
    }

    else if(req.url==="/about"){
    res.setHeader('Content-header', 'text/html');
    res.write("<html>");
    res.write("<head><title>Welcome to About Us page</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    res.end();
    }

    else if(req.url==="/node"){
    res.setHeader('Content-header', 'text/html');
    res.write("<html>");
    res.write("<head><title>Welcome to my Node Js project</title></head>");
    res.write("<body><h1>Welcome to my Node Js project</h1></body>");
    res.write("</html>");
    res.end();
    }

})

server.listen(4000);