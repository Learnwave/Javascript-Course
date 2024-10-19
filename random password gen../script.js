


function genratePassword(length, includeLowerCase,includeUpperCase,includeNumber,includeSymbols){

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=";
let allowedChars = "";
let password = "";

allowedChars  += includeLowerCase ? lowercase : "";
allowedChars += includeUpperCase ? uppercase : "";
allowedChars += includeNumber ? numbers : "";
allowedChars += includeSymbols ? symbols : "";

if(length <=0 ){
    return `password lenth must be atleast 1`
}
if(allowedChars.length === 0){
    return `atleast 1 set of charactor needs to be selected`
}
for (let i = 0; i < length; i++) {
    const randomindex = Math.floor(Math.random()* allowedChars.length)
    password += allowedChars[randomindex]
    
}



return  password;

}

const passwordLength = 10;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbols = true;

 const createdPassword = genratePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumber,includeSymbols);


 const GenePswsd = document.getElementById("GenePswsd");
 const showPswd = document.getElementById("showPswd");

 GenePswsd.onclick = ()=>{
        showPswd.textContent = genratePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumber,includeSymbols)
 }