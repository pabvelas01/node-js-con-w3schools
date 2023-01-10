var fs = require("fs");
var http = require('http');

// para leer un archivo y retornarlo respuesta http
http.createServer(function(req,res){
    fs.readFile('demo_file.html',function (err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end()
    });
    
  
    // esto crea o actualiza un archivo, si no existe lo crea
    fs.appendFile('mynewfile1.txt', 'Hello content!\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
    });

    // esto abre un archivo,m enb caso de que no exista lo crea con el argumento texto w
    fs.open('mynewfile2.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Saved method open!');
      });

    //Crea un nuevo archivo, y en caso que exista reemplaza todo 
    fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
    });  

    // Permite eliminar fichero
    fs.unlink('mynewfile4.txt', function (err) {
        if (err) throw err; // con throw err queda la fox en el server
        console.log('File deleted!');
      });
    
    // Permite renombrar ficheros
    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
      });
     

}).listen(8081);