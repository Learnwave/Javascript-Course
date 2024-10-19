const h1 = document.createElement("h1")

h1.textContent = "i like pizza "

h1.id  = "myH1"

document.body.prepend(h1)

const box = document.querySelector('.box4');
const box2 = document.querySelector('.box');

box.addEventListener("click",(e)=>{
    const h1 = document.createElement("h1").textContent = "hi there im h1"
    box2.append(h1);
})


