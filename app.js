const express = require('express');

app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/services',(req,res)=>{
    res.render('services');
});
app.get('/menu',(req,res)=>{
    res.render('menu');
});
app.get('/cart',(req,res)=>{
    res.render('cart');
});

app.get('/admin',(req,res)=>{
    res.render('admin/dashboard');
    // res.send('hey');
});

app.listen(process.env.PORT || 3000,()=>{
    console.log('Listening on port 3000');
});