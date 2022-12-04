
const userController = {
    index: (req, res) => {
        var style = "/css/user.css";
        return res.render("user", {title: "Pagina do Usuário", style })

    },
    show: (req, res) => {

    },
    create: (req, res) => {


    }

}
module.exports = userController;