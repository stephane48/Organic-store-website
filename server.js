require('./models/db');
require('dotenv').config({path:"./config/keys.env"});
const express= require('express');
const path= require('path');
const exphbs=require('express-handlebars');
const bodyparser= require('body-parser');
const orderController= require('./controllers/orderController');

var app=express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'views'));
app.engine('hbs',exphbs({
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname+'/views/'
}));
app.set('view engine','hbs');
const PORT =process.env.PORT;
app.listen(PORT,()=>
{
    console.log("Server is up and running at ", PORT);
})
app.use('/',orderController);