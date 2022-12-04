const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController")

router.get("/",  userController.index);
router.post("/", userController.create);
router.delete("/:id",);

module.exports = router;