const mybtn = document.getElementById("rollbtn")

const mylabel = document.getElementById("mylabel1")
const mylabel2 = document.getElementById("mylabel2")
const mylabel3 = document.getElementById("mylabel3")

const min = 1;
const max = 6;

let randomNum;
let randomNum1;
let randomNum2;


mybtn.onclick = ()=>{
    randomNum = Math.floor( Math.random() * max + min ) ;
    randomNum1 = Math.floor( Math.random() * max + min ) ;
    randomNum2 = Math.floor( Math.random() * max + min ) ;
    mylabel.textContent = randomNum;
    mylabel2.textContent = randomNum1;
    mylabel3.textContent = randomNum2;
}
