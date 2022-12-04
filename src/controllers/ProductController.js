const produtos = require("../data/product.json")
const productController = {
    index:(req,res)=>{
        var style = "/css/product.css";
        return res.render("product",{produtos, title:"Home", style})

    },
    show:(req,res) =>{

    },
    create:(req, res)=>{


    }

}
module.exports=productController;