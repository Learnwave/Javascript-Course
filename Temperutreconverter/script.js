
 const temp =  document.getElementById("textBox");
 const tofahrenheit = document.getElementById("tofahrenheit");
 const toCelsius = document.getElementById("toCelsius");
 const displayinfo = document.getElementById("displayinfo");

 let info ;



const convert = ()=>{

    if(temp.value == ""){
            displayinfo.textContent = ' invalid ! Please Enter The value';
    }
    else if(tofahrenheit.checked){
        info = Number(temp.value);
        info = info * 9 / 5 + 32;
        displayinfo.textContent = ` celsius to fahrenheit is ${info.toFixed(2)}° `

    }
    else if(toCelsius.checked){
        info = Number(temp.value)
        info = (info - 32 ) * (5/9);
        displayinfo.textContent = ` fahrenheit to celsius ${info.toFixed(2)}° `
    }

        
}

