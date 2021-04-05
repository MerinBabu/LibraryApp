const express = require("express");
const authRouter = express.Router();

function router(nav) {

    authRouter.get("/signup", function(req, res) {
        res.render("signup", {
            nav,
            title: "Sign Up"
        })
    });

    authRouter.get("/login", function(req, res) {
        res.render("login", {
            nav,
            title: "Log In"
        })
    });

    return authRouter;
}

module.exports = router;