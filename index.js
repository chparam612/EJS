const express = require("express");

const app = express();

const path = require("path");
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req,res)=>{
    res.render("home.ejs");
})

app.get("/hello", (req,res)=>{
    res.send("Hello");
})


// app.get("/rollDice",(req,res)=>{
//     res.render("rollDice.ejs" );
// });


app.get("/rollDice",(req,res)=>{
    let diceNo =Math.floor(Math.random()*6)+1; 
    res.render("rollDice.ejs" , {num : diceNo});
});

app.get("/rollDice2",(req,res)=>{
    let diceNo =Math.floor(Math.random()*6)+1; 
    res.render("rollDice2.ejs" , {diceNo});
});

app.listen(port , () =>{
console.log(`listening on port ${port}`);
})

// app.get("/ig/:username",(req,res)=>{
//     let {username} = req.params;
//     // res.send(`Welcome for login in into Instagram: @${username}`);
//     res.render("insta.ejs" , {username});
// })

app.get("/ig/:username",(req,res)=>{
    const followers = ["nadye","aman","rahul","adam","steve"];
    let {username} = req.params;
    
    res.render("insta.ejs" , {username , followers});
})