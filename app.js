const express = require("express");
const app = new express();
const port = process.env.PORT || 5010

const nav = [
    { link: "/books", name: "Books" },
    { link: "/authors", name: "Author" },
    { link: "/auth/signup", name: "Sign Up" },
    { link: "/auth/login", name: "Log In" },
    { link: "/addBook", name: "Add Books" },
    { link: "/addAuthor", name: "Add Authors" }
];

const booksRouter = require("./src/routes/bookRoutes")(nav); //passing nav from app.js to bookRoutes.js
const authorsRouter = require("./src/routes/authorRoutes")(nav);
const authRouter = require("./src/routes/authRoutes")(nav);
const addBookRouter = require("./src/routes/addBookRoutes")(nav);
const addAuthorRouter = require("./src/routes/addAuthorRoutes")(nav);


app.set("view engine", "ejs"); //setting template engine to ejs
app.set("views", "./src/views"); //telling html files or views lie are at this location
app.use(express.static("./public")); //express considers css,images and js files as static files. So we have to declare them as such with their location
app.use("/books", booksRouter); //telling app to use booksRouter for /books request
app.use("/authors", authorsRouter);
app.use("/auth", authRouter);
app.use("/addBook", addBookRouter);
app.use("/addAuthor", addAuthorRouter);

app.get("/", function(req, res) { //first request(here default request) and its call back function

    res.render("index", {

        nav,
        title: "Library"
    });

});

// app.get("/books", function(req, res) {    //first method for books(or any) router

//     res.render("books", {

//         nav: [{ link: "/books", name: "Books" }, { link: "/author", name: "Author" }],
//         title: "Library"
//     });
// });


app.listen(port, () => { console.log("Server ready at " + port); });