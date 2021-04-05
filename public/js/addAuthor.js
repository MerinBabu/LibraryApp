let authorname = document.getElementById("authorname");
let errorauthorname = document.getElementById("errorauthorname");
let bestbookname = document.getElementById("bestbookname");
let errorbestbookname = document.getElementById("errorbestbookname");
let award = document.getElementById("award");
let erroraward = document.getElementById("erroraward");
authorname.addEventListener("keyup", authornamevalidation);
bestbookname.addEventListener("keyup", bestbooknamevalidation);
// award.addEventListener("keyup", awardvalidation);
authorname.addEventListener("focusout", authornamevalidation);
bestbookname.addEventListener("focusout", bestbooknamevalidation);
// award.addEventListener("focusout", awardvalidation);
// let frmaddauthor = document.getElementById("frmaddauthor");
// frmaddauthor.addEventListener("submit", validate);


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

function bestbooknamevalidation() {
    if (bestbookname.value.trim() == "") {
        errorbestbookname.innerHTML = "Best book name cannot be Empty";
        bestbookname.style.border = "1px solid red";
        return false;
    } else {
        errorbestbookname.innerHTML = "";
        bestbookname.style.border = "";
        return true;
    }
}

// function awardvalidation() {
//     if (award.value.trim() == "") {
//         erroraward.innerHTML = "Awards cannot be Empty";
//         award.style.border = "1px solid red";
//         return false;
//     } else {
//         erroraward.innerHTML = "";
//         award.style.border = "";
//         return true;
//     }
// }

//image upload
let fileTag = document.getElementById("filetag");
let preview = document.getElementById("preview");

fileTag.addEventListener("change", function() {
    changeImage(this);
});

function changeImage(input) {
    var reader;

    if (input.files && input.files[0]) {
        reader = new FileReader();

        reader.onload = function(e) {
            preview.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function validate_addAuthor() {
    // Basic Validation 
    if (authornamevalidation() && bestbooknamevalidation()) {
        console.log("subkitted");
        return true;

    } else
        console.log("no");
    return false;

}