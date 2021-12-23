import("./index.css")
import Logo from './img/logo.png';
import App from "./components"

let layout = document.getElementById("root");
layout.innerHTML = App;

let logo = document.getElementById("navbar_logo");
logo.src = Logo;
logo.style.width = "100px";

const d = new Date();
document.getElementById("left").innerHTML = d;

var input = document.querySelector("input");
var btn = document.querySelector(".addTask > button");

btn.addEventListener("click", addList);

input.addEventListener("keyup", (e) => {
    e.key === 'Enter' ? addList(e) : null;
});

function addList(e) {
    var notcomp = document.querySelector(".notcomp");
    var comp = document.querySelector(".comp");

    var newli = document.createElement("li");
    var checkBtn = document.createElement("button");
    var delBtn = document.createElement("button");

    // checkBtn.innerHTML = `<i class="fas fa-check-circle"></i>`;
    checkBtn.innerHTML = `Done`
    // delBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    delBtn.innerHTML = `Delete`;

    if (input.value !== "") {
        newli.textContent = input.value;
        input.value = "";
        notcomp.appendChild(newli);
        newli.appendChild(checkBtn);
        newli.appendChild(delBtn);
    }

    checkBtn.addEventListener("click", function () {
        var parent = this.parentNode;
        parent.remove();
        comp.appendChild(parent);
        checkBtn.style.display = "none";
    });
    delBtn.addEventListener("click", function () {
        var parent = this.parentNode;
        parent.remove();
    });
}

