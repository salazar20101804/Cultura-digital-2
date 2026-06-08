window.addEventListener("scroll", revelar);

function revelar(){
let reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let altura = window.innerHeight;
let top = reveals[i].getBoundingClientRect().top;

if(top < altura - 100){
reveals[i].classList.add("active");
}
}
}

revelar();
