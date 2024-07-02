
setInterval(function () {
const time = new Date().toLocaleTimeString();
const date = new Date().toDateString()
document.getElementById("time").innerHTML = time ;
document.getElementById("date").innerHTML = date ;
},100)

