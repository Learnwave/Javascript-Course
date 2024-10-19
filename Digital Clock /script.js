function upDateClock(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timestring;

}
upDateClock();

setInterval(upDateClock,1000)