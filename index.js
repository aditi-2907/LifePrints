import express from "express"
import bodyParser from "body-parser";
import pg from "pg"
import bcrypt from "bcrypt"
import passport from "passport"
import { Strategy } from "passport-strategy";
import session from "express-session";
import 'dotenv/config'

const port= process.env.port||3000;

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("page1.ejs");
})
app.get("/p2",(req,res)=>{
    res.render("page2.ejs");
})
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})