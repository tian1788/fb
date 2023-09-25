// let name = prompt("ano name mo?");
// alert("namo ka " + name);
// alert("namo ka talaga " + name);
// alert("charot lang");
// alert("r u ok?");
// alert("bat ang tamad mo ngayun? " + name);
// alert("kung hindi kawawi ka naman HAHAHAHA");
// alert("de jwk lang");
// alert("Eto konting kacornyhan ko HAAHAHAHA");
let toggle = document.getElementById('toggle');
let box = document.querySelector(".box");
let isWide = false;

toggle.addEventListener("click", ()=> {
    if(isWide == false) {
        box.style.left = "0";
        isWide = true;
    } else if(isWide == true){
        box.style.left = "-30%";
        isWide = false;
    }
});