const checkBox = document.getElementById("checkbox");
const visabtn = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

submit.onclick = ()=>{
    if(checkBox.checked){
        subresult.textContent = `You Are Subscribed! `
    }
    else{
        subresult.textContent = `You are Not subscribed!`
    }
    if (visabtn.checked) {
        paymentresult.textContent = "You are paying with visa"
    }
    else if(mastercard.checked){
        paymentresult.textContent = `You are paying with master card`
    }
    else if(paypal.checked){
        paymentresult.textContent = `You Are paying with paypal`
    }
    else{
        paymentresult.textContent  = `But You Havn't choose Any payment method`
    }
}