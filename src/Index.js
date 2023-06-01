import app from "./App";
app.listen(app.get('port')) 

console.log("Server on port",app.get('port'));