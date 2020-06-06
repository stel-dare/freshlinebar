const express = require('express');

app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.listen(process.env.PORT || 3000,()=>{
    console.log('Listening on port 3000');
});