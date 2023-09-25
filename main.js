let name = null;

name = prompt("ano name mo?");
if(name.length < 1){
    name = null;
}
while(name == null){
    name = prompt("ANO NGA PARANG DKA NMN NAG GRADE2 NYAN");
    if(name.length < 1){
        name = null;
    }
}

alert("Goodmorninggg " + name);
alert("Tulog pa ako pag open mo nito HAHAAHAHAHA ");
alert("Ingat kasa pag pasok mo sa school");
alert("kumain bago umalis");
alert("Kawawi ka naman maaga ka gumising ngayun");
alert("de jwk lang");
alert("wag tamarin pumasok sa ftf mo 🙄🙄 ");
alert("Nagrereview lang ako nung natulog ka kastress AHAHAHA");



let toggle = document.getElementById('toggle');
let box = document.querySelector(".box");
let isWide = false;

toggle.addEventListener("click", ()=> {
    if(isWide == false) {
        box.style.left = "0";
        isWide = true;
    } else if(isWide == true){
        box.style.left = "-206px";
        isWide = false;
    }

});