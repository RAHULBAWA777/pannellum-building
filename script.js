

let Image = document.getElementById("imageIso");
let button = document.getElementById("clicker");
let Back = document.getElementById("back");
let BBack = document.getElementById("bback");


function changeImg() {

    if (Image.getAttribute('src') === "ISOMETRIC VIEW.jpeg") {
        Image.setAttribute('src', "Floor plan.jpg");
        button.innerText='Click Here for Isometric view'
    }
    else {
        Image.setAttribute('src', "ISOMETRIC VIEW.jpeg");
        button.innerText='Click Here for 2D view'
    }
}


// let gb=function gb() {
//       window.open('isometric view.html','_self');
// }

function fb() {
    window.open('index.html','_self');
}