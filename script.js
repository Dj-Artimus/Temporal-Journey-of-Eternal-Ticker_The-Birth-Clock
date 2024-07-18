
setInterval(function () {
const time = new Date().toLocaleTimeString();
const date = new Date().toDateString();
document.getElementById("time").innerHTML = time ;
document.getElementById("date").innerHTML = date ;
birth();
},1)

function birth(){
    const birth = new Date(2002,5,1,0,30,49);
    const now = new Date();

    const ageInMilliseconds = now - birth;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;

    // Handle the leap years and find precise month
    const birthYear = birth.getFullYear();
    const currentYear = now.getFullYear();
    let leapDays = 0;
    for (let year = birthYear; year <= currentYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            leapDays++;
        }
    }
    const totalDays = ageInDays + leapDays;

    const ageInMonths = totalDays / 30.436875; // Average month length
    const ageInYears = ageInMonths / 12;

    // Extract individual components
    let years = Math.floor(ageInYears);
    let months = Math.floor(ageInMonths % 12);
    let days = Math.floor(ageInDays % 30.436875);
    let hours = Math.floor(ageInHours % 24);
    let minutes = Math.floor(ageInMinutes % 60);
    let seconds = Math.floor(ageInSeconds % 60);
    let miliseconds = Math.floor(ageInMilliseconds % 1000);

    // add leading zero for single digit numbers
    // months = leadingZero(months);
    // hours = leadingZero(hours);
    // seconds = leadingZero(seconds);

document.getElementById("birthTicker").innerHTML = `
<div style="grid-area:1 / 1 / span 1 / span 1"><h2>${years}</h2><p>YEARS</p></div>
<div style="grid-area:1 / 2 / span 1 / span 1"><h2>${months}</h2><p>MONTHS</p></div>
<div style="grid-area:1 / 3 / span 1 / span 1"><h2>${days}</h2><p>DAYS</p></div>
<div style="grid-area:2 / 1 / span 1 / span 1"><h2>${hours}</h2><p>HOURS</p></div>
<div style="grid-area:2 / 2 / span 1 / span 1"><h2>${minutes}</h2><p>MINUTES</p></div>
<div style="grid-area:2 / 3 / span 1 / span 1"><h2>${seconds}</h2><p>SECONDS</p></div>
<div id="mili" style="grid-area:3 / 2 / span 1 / span 1"><h2>${Math.floor(miliseconds/100)}</h2><p>MILI</p></div>`;


// document.getElementById("birthTicker").innerHTML = `
// <div style="grid-area:1 / 1 / span 1 / span 1"><h2>${Math.round(ageInYears)}</h2><p>YEARS</p></div>
// <div style="grid-area:1 / 2 / span 1 / span 1"><h2>${Math.round(ageInMonths).toLocaleString('en-IN')}</h2><p>MONTHS</p></div>
// <div style="grid-area:2 / 1 / span 1 / span 1"><h2>${Math.round(ageInDays).toLocaleString('en-IN')}</h2><p>DAYS</p></div>
// <div style="grid-area:2 / 2 / span 1 / span 1"><h2>${Math.round(ageInHours).toLocaleString('en-IN')}</h2><p>HOURS</p></div>
// <div style="grid-area:3 / 1 / span 1 / span 1"><h2>${Math.round(ageInMinutes).toLocaleString('en-IN')}</h2><p>MINUTES</p></div>
// <div style="grid-area:3 / 2 / span 1 / span 1"><h2>${Math.round(ageInSeconds).toLocaleString('en-IN')}</h2><p>SECONDS</p></div>
// <div id="mili" style="grid-area:4 / 1 / span 1 / span 2"><h2>${ageInMilliseconds.toLocaleString('en-IN')}</h2><p>MILI SECONDS</p></div>`;

}

document.getElementById("menuicon").addEventListener("click",() => {
    document.getElementsByClassName("menu")[0].style.display="flex";
    document.getElementsByClassName("menu")[0].style.animation="menuIn 0.5s ease";
    document.getElementById("menuicon").style.visibility="hidden";
    document.getElementById("title").style.visibility="hidden";
    
});
document.getElementById("close").addEventListener("click",() => {
    document.getElementsByClassName("menu")[0].style.animation="menuOut 0.5s ease-in";
    document.getElementsByClassName("menu")[0].style.display="none";
    document.getElementById("menuicon").style.visibility="visible";
    document.getElementById("title").style.visibility="visible";
});

function leadingZero(n){
    let num = n >= 0 && n <=9 ? "0" + n:n;
    return num;
}
