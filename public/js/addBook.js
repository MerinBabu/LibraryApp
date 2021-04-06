let bookname = document.getElementById("bookname");
let errorbookname = document.getElementById("errorbookname");
let authorname = document.getElementById("authorname");
let errorauthorname = document.getElementById("errorauthorname");
let genre = document.getElementById("genre");
let errorgenre = document.getElementById("errorgenre");
bookname.addEventListener("keyup", booknamevalidation);
authorname.addEventListener("keyup", authornamevalidation);
genre.addEventListener("keyup", genrevalidation);
bookname.addEventListener("focusout", booknamevalidation);
authorname.addEventListener("focusout", authornamevalidation);
genre.addEventListener("focusout", genrevalidation);



function booknamevalidation() {
    if (bookname.value.trim() == "") {
        errorbookname.innerHTML = "Book Name cannot be Empty";
        bookname.style.border = "1px solid red";
        return false;
    } else {
        errorbookname.innerHTML = "";
        bookname.style.border = "";
        return true;
    }
}

function authornamevalidation() {
    if (authorname.value.trim() == "") {
        errorauthorname.innerHTML = "Author Name cannot be Empty";
        authorname.style.border = "1px solid red";
        return false;
    } else {
        errorauthorname.innerHTML = "";
        authorname.style.border = "";
        return true;
    }
}

function genrevalidation() {
    if (genre.value.trim() == "") {
        errorgenre.innerHTML = "Genre cannot be Empty";
        genre.style.border = "1px solid red";
        return false;
    } else {
        errorgenre.innerHTML = "";
        genre.style.border = "";
        return true;
    }
}
//image upload
let fileTag = document.getElementById("filetag");
let preview = document.getElementById("preview");

fileTag.addEventListener("change", function() {
    changeImage(this);
});

function changeImage(input) {

    if (input.files && input.files[0]) {
        let filereader = new FileReader();

        filereader.onload = function(event) {
            preview.setAttribute('src', event.target.result);

        }
        reader.readAsDataURL(input.files[0]);
        return true;

    }
}

function validate_addBook() {
    if (booknamevalidation() && authornamevalidation() && genrevalidation()) {
        console.log("subkitted");
        return true;
    } else
        console.log("no");
    return false;

}