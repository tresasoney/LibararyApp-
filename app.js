const express= require('express');
const app = express();


const nav = [{
    link:'/books',name:'Books'},
    {link:'/author',name:'Authors'},
{link:'/SignIn',name:'Sign Out'},
{link:'/SignUp',name:'Sign Up'},
{link:'/addbook',name:'Add Book'},
{link:'/addauthor',name:'Add Author'}];


        
        
const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter= require('./src/routes/authorRoutes')(nav);
const signupRouter=require('./src/routes/SignupRoutes');
const signinRouter=require('./src/routes/SigninRoutes');
const addbookRouter=require('./src/routes/addbookRoutes')(nav);
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav);
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/author',authorsRouter);
app.use('/Signin',signinRouter);
app.use('/Signup',signupRouter);
 app.use('/addbook',addbookRouter);
 app.use('/addauthor',addauthorRouter);
app.get('/',function(req,res){
    res.render("index",
    {   nav,
        title:'Libarary'
    });
});



app.listen(50115);