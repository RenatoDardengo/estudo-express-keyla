const express = require ("express");
const app = express();
const port = 3000;
const productRoute = require("./src/routes/productRoute")
const userRoute = require("./src/routes/userRoute")
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/uploads"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//sem usar rotas
/*app.get("/",(req, res)=>{
    console.log ("home")
   return res.send("Pagina home")

});
app.get("/product", (req, res) => {
    console.log ("produto")
    return res.send("Pagina Produto")

});*/


app.use("/product", productRoute )
 app.use("/user", userRoute)
app.listen(port,()=>{
    console.log(`servidor rodando em http://localhost:${port}`)
})


