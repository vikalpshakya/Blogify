require('dotenv').config()

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const favicon = require('serve-favicon');


const Blog = require('./models/blog');


const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');

const { checkForAuthenticationCookie } = require('./middlewares/authentication');
const app = express();
const PORT = process.env.PORT || 8000;
const url = process.env.MONGO_URI;
console.log("Connecting to MongoDB with URI:", url);
mongoose.connect(url)

.then(() => console.log('MongoDB Connected'))
.catch((err) => console.error('MongoDB Connection Error:', err));


app.set('view engine','ejs');
app.set('views',path.resolve('./views'));



app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public'))); 


app.get('/',async(req,res) => {
    const allBlogs = await Blog.find({});
    // console.log(req.user);
    res.render('home',{
        user:req.user,
        blogs:allBlogs,
    }); 
})
app.listen(PORT , () => console.log(`Server Started at PORT :${PORT}`));

app.use('/user',userRoute);
app.use('/blog',blogRoute);