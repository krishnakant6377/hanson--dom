const header= document.getElementById("text")
console.log(header)


const header2= document.getElementsByTagName("h1")
console.log(header2[0])


const colorhead = document.getElementsByClassName("box");
console.log(colorhead[0])

const header1= document.getElementsByTagName("h2")
console.log(header1[0])
header1[0].innerText= " Changes to    Hello World"


function chnge(){
    let d = document.getElementById("parent").style.flexDirection="column"
   return d
}

document.getElementById("heading").style.color="red"


function change(){
    const header1= document.getElementById("one")

header1.innerText= "Welcome to Elevation academy "

}

function clock() {
    const date = new Date();

    let hours = date.getHours();

    let min = date.getMinutes();

    let sec = date.getSeconds();

    let meridian;
    if (hours > 12) {
        meridian = "PM"
        hours -= 12;
    }
    else {
        meridian = "AM"
    }

    if (hours < 10)
        hours = "0" + hours;

    if (min < 10)
        min = "0" + min;

    if (sec < 10)
        sec = "0" + sec;


    const hoursSlot = document.getElementById("hours")
    hoursSlot.innerHTML = hours;

    const minsSlot = document.getElementById("mins")
    minsSlot.innerHTML = min;

    const secsSlot = document.getElementById("secs")
    secsSlot.innerHTML = sec;

    const meridianSlot = document.getElementById("meridian")
    meridianSlot.innerHTML = meridian;
}

setInterval(() => {
    clock();
    
}, 1000);



