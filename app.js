const express = require('express');

app = express();

app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.listen(process.env.PORT || 3000,()=>{
    console.log('Listening on port 3000');
});