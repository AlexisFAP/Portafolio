const express = require('express');
const path = require('path');
const app = express();

app.use("/css", express.static('./css/'));
app.use("/js", express.static('./js/'));

app.set('port',8070);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});