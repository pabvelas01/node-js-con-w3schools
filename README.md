### Ejecutar fichero node js 
``` C:\Users\Your Name>node myfirst.js ```


### Para exportar un modulo se crea el js 
```
exports.myDateTime = function () {
    return Date();
  };

  exports.myStrSaludo = "Hola";
  ```

### luego se llama desde el modulo principal en nuevo js
```
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime() + " | "+dt.myStrSaludo);
  res.end();
}).listen(8081);
  
```
### Manejo de http y url module para query request
```
var http = require('http');
var url = require('url');

http.createServer(function(req,res){
   res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Hollllaaaaa</h1>");
    //res.write(req.url); // devuelve url request
    var q = url.parse(req.url,true).query;
    var txt=q.year+ " " +q.month

    res.end(txt);
}).listen(8081);
  
```

### Manejo de archivos var fs = require('fs');

```
Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files
```

#### Codigo de ejemplo con todo lo mencionado anteriormente

```

var fs = require('fs');
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

```