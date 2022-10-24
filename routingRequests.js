const fs = require('fs');
const https = require('http');
const path = require("path");

const server = https.createServer((req,res)=>{

    const url = req.url;
    const method = req.method;
    const body = [];

    if(url==="/"){
    
        // const filePath = path.join(__dirname, "messages.txt");

        fs.readFile("messages.txt", {encoding: "utf-8"}, (err, data)=>{
            if(err){
                console.log(err);
            }
            console.log("the data is "+ data);
        res.write("<html>");
        res.write("<head><title>Welcome home</title></head>");
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/messages" method="POST"><input id="message" type="text" name="messages"><button>Send</button></form><body>');
        res.write("</html>");
        
        return res.end();
        });

    }


    
    else if(url==="/messages" && method==='POST'){
       
        req.on('data', (chunk)=>{
            body.push(chunk);

        });


        return req.on('end', ()=> {
        const parsedBody = Buffer.concat(body).toString();
        const messages = parsedBody.split('=')[1];
        fs.writeFile('messages.txt', messages, (err)=>{
            if(err){

                console.log(err);

            }
        const msg = messages;
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        });
    });
        

    }
    else{
    res.setHeader('Content-header', 'text/html');
    res.write("<html>");
    res.write("<head><title>Welcome to About Us page</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    res.end();
    }

    })

server.listen(4000);