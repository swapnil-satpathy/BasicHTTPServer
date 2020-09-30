const http=require('http');
const port=8000;

const fs=require('fs');  //This module is required to read and write from files


function requestHandler(request,response){
    console.log(request.url);
    response.writeHead(200,{'content-type':'text/html'});

    let filepath;
    switch(request.url){
        case '/':
            filepath='./index.html';
            break;
        case '/profile':
            filepath='./profile.html';
            break;
        default:
            filepath='./404.html';
            break;
        }
    fs.readFile(filepath,function(err,data){ //err-> displays the error and data the data...
        //Callback function
        if(err){
            console.log('error',err);
            return response.end('<h1> Error!!!!</h1>');
        }
        return response.end(data);
    });
    // response.end('<h1>Welcome to the Oracle</h1>');

}

//Creating a Server
const server=http.createServer(requestHandler);



server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on  port : ", port);
});