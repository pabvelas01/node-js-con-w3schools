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