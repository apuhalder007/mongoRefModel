const ex = require("express");
const mong = require("mongoose");
const bodyParser = require("body-parser");
const app = ex();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
mong.connect("mongodb://apuplay007:admin123@ds231205.mlab.com:31205/test_db");

/* Creating Model Schema */

const user = require("./model/user");
const post = require("./model/post");


app.get("/make-model", (req, res)=>{
    
    const newUser = new user({
            username:"test",
            password: "admin",
            email: "test@gmailcom"
    }); 

    const newPost = new post({
        title: "Test Post",
        content: "Test Content",
        postby: '5b7ab905745967345c42e4a2'
    });

    newPost.save((err, post)=>{
        if(err) throw err;
        console.log(post);
        res.json(post);
    })

    /* newUser.save((err , user)=>{
            if (err) throw err;
            console.log(user);
            res.json(user);
        }); */
    
});

app.get("/posts", (req, res)=>{
    post.find({})
    .populate('postby')
    .exec((err, posts)=>{
        console.log(posts);
        res.json(posts);
    });
});
const port = 3000;
app.listen(port, ()=>{
    console.log("server running on "+port);
})