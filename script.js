
setInterval(function () {
const time = new Date().toLocaleTimeString();
const date = new Date().toDateString();
document.getElementById("time").innerHTML = time ;
document.getElementById("date").innerHTML = date ;
DOB();
},1)

function DOB(){
const dob = new Date(2002,5,1,0,30);
const now = new Date();

const miliseconds = now.getMilliseconds()-dob.getMilliseconds();
const seconds = now.getSeconds()-dob.getSeconds();
const minutes = now.getMinutes()>=dob.getMinutes()? now.getMinutes()-dob.getMinutes():now.getMinutes()+dob.getMinutes();
const hours = now.getHours()-dob.getHours();
const day = now.getDate()-dob.getDate();
const month = now.getMonth()-dob.getMonth();
const year = now.getFullYear() - dob.getFullYear();

document.getElementById("birthTicker").innerHTML = year + " " + month + " " + day + " " + hours + " " + minutes + " " + seconds + " " + Math.floor(miliseconds/100);
}