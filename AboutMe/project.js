const http=require('http');
const fs=require('fs');
http.createServer((req,res)=> {
    res.writeHead(200,{'Content-Type' : 'text/html'})
    if(req.url==='/index' || req.url==='/'){
        let data=fs.readFileSync('index.html');
        res.write(data);
    }
   
    
    
    res.end(); 
    

}).listen(8080, ()=>{console.log('server started ta 8080')});