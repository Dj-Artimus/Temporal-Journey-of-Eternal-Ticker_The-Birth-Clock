
setInterval(function () {
const time = new Date().toLocaleTimeString();
const date = new Date().toDateString();
document.getElementById("time").innerHTML = time ;
document.getElementById("date").innerHTML = date ;
birth();
},1)


var y = 2002;
var m = 5;
var d = 1;
var hr = 0;
var min = 30;

// localStorage.clear();

function birth(){

    const birthDate = new Date(y,m,d,hr,min);
    const birthDateTime = birthDate.getTime();
    const now = new Date();
    const nowDateTime = now.getTime();
    
    // Calculate the difference in milliseconds
    const diff = nowDateTime - birthDateTime;

    // Handle leap years and DST
    const birthYear = birthDate.getFullYear();
    const nowYear = now.getFullYear();
    // const isLeapYear = (birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0;
    const birthMonth = birthDate.getMonth();
    const nowMonth = now.getMonth();
    const birthDay = birthDate.getDate();
    const nowDay = now.getDate();
    const birthHour = birthDate.getHours();
    const nowHour = now.getHours();
    const birthMinute = birthDate.getMinutes();
    const nowMinute = now.getMinutes();
    const birthSecond = birthDate.getSeconds();
    const nowSecond = now.getSeconds();
    const birthDSTOffset = birthDate.getTimezoneOffset();
    const nowDSTOffset = now.getTimezoneOffset();
    const dstDiff = birthDSTOffset - nowDSTOffset;

    let years = nowYear - birthYear;
    let months = nowMonth - birthMonth;
    let days = nowDay - birthDay;
    let hours = nowHour - birthHour;
    let minutes = nowMinute - birthMinute;
    let seconds = nowSecond - birthSecond;

    // Adjust for month and day differences
    if (months < 0) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        days += getDaysInMonth(birthYear, birthMonth);
    }

    hours = nowHour - birthHour;
    if (nowHour < birthHour) {
        hours = 24 - (birthHour - nowHour);
    }
    // Adjust for hour, minute, and second differences
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }
    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }

    // Adjust for DST
    if (dstDiff !== 0) {
        const dstHours = Math.floor(dstDiff / 60);
        const dstMinutes = dstDiff % 60;
        hours += dstHours;
        minutes += dstMinutes;
    }

    // Handle edge cases
    if (birthMonth === 1 && birthDay === 29) { // February 29
        if (nowMonth < 2 || (nowMonth === 2 && nowDay < 29)) {
            years--;
        }
    }

    if (nowMonth === 11 && nowDay === 31) { // December 31
        if (birthMonth > 11 || (birthMonth === 11 && birthDay > 31)) {
            years++;
        }
    }

    const ageInMilliseconds = now - birthDate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;

    hours = Math.floor(ageInHours % 24);
    minutes = Math.floor(ageInMinutes % 60);
    seconds = Math.floor(ageInSeconds % 60);
    let miliseconds = Math.floor(ageInMilliseconds % 1000);

    if((birthHour==nowHour) && (birthMinute>nowMinute)){
        days--;
    }
    
    document.getElementById("birthTicker").innerHTML = `
    <div><h2>${years}</h2><p>YEARS</p></div>
    <div><h2>${months}</h2><p>MONTHS</p></div>
    <div><h2>${days}</h2><p>DAYS</p></div>
    <div><h2>${hours}</h2><p>HOURS</p></div>
    <div><h2>${minutes}</h2><p>MINUTES</p></div>
    <div><h2>${seconds}</h2><p>SECONDS</p></div>
    <div id="mili"><h2>${Math.floor(miliseconds/100)}</h2><p>MILI</p></div>
    `
    
}

// document.getElementById("birthTicker").innerHTML = `
// <div style="grid-area:1 / 1 / span 1 / span 1"><h2>${Math.round(ageInYears)}</h2><p>YEARS</p></div>
// <div style="grid-area:1 / 2 / span 1 / span 1"><h2>${Math.round(ageInMonths).toLocaleString('en-IN')}</h2><p>MONTHS</p></div>
// <div style="grid-area:2 / 1 / span 1 / span 1"><h2>${Math.round(ageInDays).toLocaleString('en-IN')}</h2><p>DAYS</p></div>
// <div style="grid-area:2 / 2 / span 1 / span 1"><h2>${Math.round(ageInHours).toLocaleString('en-IN')}</h2><p>HOURS</p></div>
// <div style="grid-area:3 / 1 / span 1 / span 1"><h2>${Math.round(ageInMinutes).toLocaleString('en-IN')}</h2><p>MINUTES</p></div>
// <div style="grid-area:3 / 2 / span 1 / span 1"><h2>${Math.round(ageInSeconds).toLocaleString('en-IN')}</h2><p>SECONDS</p></div>
// <div id="mili" style="grid-area:4 / 1 / span 1 / span 2"><h2>${ageInMilliseconds.toLocaleString('en-IN')}</h2><p>MILI SECONDS</p></div>`;


document.getElementById("menuicon").addEventListener("click",() => {
    document.getElementsByClassName("menu")[0].style.animation="menuIn 0.1s ease";
    document.getElementsByClassName("menu")[0].style.display="flex";
    document.getElementById("menuicon").style.visibility="hidden";
    document.getElementById("menuClose").style.visibility="visible";
    document.getElementById("title").style.opacity="0";    
    document.getElementById("title").style.transitionDelay="0s";

    document.getElementsByClassName("focusMode")[0].style.visibility="visible";
    document.getElementsByClassName("focusMode")[0].style.opacity="1";
    document.getElementById("focusTitle").style.display="block";    
    document.getElementById("focusTitle").style.opacity="1";    
    setTimeout(() => {
        document.getElementById("focusTitle").style.opacity="0";    
        document.getElementById("focusTitle").style.display="block";    
    }, 5000);
});
document.getElementById("menuClose").addEventListener("click",() => {
    document.getElementById("menuClose").style.visibility="hidden";
    document.getElementsByClassName("menu")[0].style.animation="menuOut 0.1s ease-out";
    document.getElementsByClassName("menu")[0].style.display="none";
    document.getElementById("menuicon").style.visibility="visible";
    document.getElementById("title").style.opacity="1";
    document.getElementById("title").style.transitionDelay=".25s";
    document.getElementsByClassName("clock")[0].style.transitionDelay=".4s";
    document.getElementById("birthTicker").style.transitionDelay=".5s";
    document.getElementsByClassName("clock")[0].style.visibility="visible";
    document.getElementById("birthTicker").style.visibility="visible";
    document.getElementsByClassName("about")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("themes")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("profile")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementById("closeOption").style.visibility="hidden";
    document.getElementById("setUpBtn").style.animation="setUpOut .5s linear forwards";
    document.getElementsByClassName("setupForm")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementById("setBtn").style.animation="setUpOut .5s linear forwards";
    document.getElementsByClassName("focusMode")[0].style.opacity="0";
    setTimeout(()=>{document.getElementsByClassName("focusMode")[0].style.visibility="hidden"},800);
});

let isFocusMode = true;
document.getElementsByClassName("focusMode")[0].addEventListener("click", () => {
    if (isFocusMode) {
        document.getElementById("menuClose").style.visibility = "hidden";
        document.getElementsByClassName("menu")[0].style.animation = "menuOut 0.1s ease-out";
        document.getElementsByClassName("menu")[0].style.display = "none";
    document.getElementsByClassName("focusMode")[0].style.opacity=".3";

        isFocusMode = false;
    }
    else {
        document.getElementsByClassName("focusMode")[0].style.opacity = "0";
        setTimeout(() => { document.getElementsByClassName("focusMode")[0].style.visibility = "hidden" }, 800);
        document.getElementById("menuicon").style.visibility = "visible";
        document.getElementById("title").style.opacity = "1";
        isFocusMode = true;
    }
})

document.getElementById("about").addEventListener("click",() => {
    document.getElementsByClassName("clock")[0].style.visibility="hidden";
    document.getElementById("birthTicker").style.visibility="hidden";
    document.getElementsByClassName("about")[0].style.animation="optionsInfoIn 1s";
    document.getElementsByClassName("about")[0].style.visibility="visible";
    document.getElementById("closeOption").style.visibility="visible";
    document.getElementsByClassName("clock")[0].style.transitionDelay=".15s";
    document.getElementById("birthTicker").style.transitionDelay=".05s";
    document.getElementsByClassName("themes")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("themes")[0].style.visibility="hidden";
    document.getElementsByClassName("profile")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("profile")[0].style.visibility="hidden";
    document.getElementById("setUpBtn").style.animation="setUpOut .5s linear forwards";
    document.getElementsByClassName("setupForm")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("setupForm")[0].style.visibility="hidden";
    document.getElementById("setBtn").style.animation="setUpOut .5s linear forwards";
    document.getElementsByClassName("focusMode")[0].style.opacity="0";
    setTimeout(()=>{document.getElementsByClassName("focusMode")[0].style.visibility="hidden"},800);

    setTimeout(smoothScroll(),5000);




});
document.getElementById("theme").addEventListener("click",() => {
    document.getElementsByClassName("clock")[0].style.visibility="hidden";
    document.getElementById("birthTicker").style.visibility="hidden";
    document.getElementsByClassName("themes")[0].style.animation="optionsInfoIn 1s";
    document.getElementsByClassName("themes")[0].style.visibility="visible";
    document.getElementById("closeOption").style.visibility="visible";
    document.getElementsByClassName("clock")[0].style.transitionDelay=".15s";
    document.getElementById("birthTicker").style.transitionDelay=".05s";
    document.getElementsByClassName("about")[0].style.visibility="hidden";
    document.getElementsByClassName("about")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("profile")[0].style.visibility="hidden";
    document.getElementsByClassName("profile")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementById("setUpBtn").style.animation="setUpOut .5s linear forwards";
    document.getElementsByClassName("setupForm")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("setupForm")[0].style.visibility="hidden";
    document.getElementById("setBtn").style.animation="setUpOut .5s linear forwards";
    document.getElementsByClassName("focusMode")[0].style.opacity="0";
    setTimeout(()=>{document.getElementsByClassName("focusMode")[0].style.visibility="hidden"},800);

});
document.getElementById("profile").addEventListener("click",() => {
    document.getElementsByClassName("clock")[0].style.visibility="hidden";
    document.getElementById("birthTicker").style.visibility="hidden";
    document.getElementsByClassName("profile")[0].style.animation="optionsInfoIn 1s";
    document.getElementsByClassName("profile")[0].style.visibility="visible";
    document.getElementById("closeOption").style.visibility="visible";
    document.getElementById("setUpBtn").style.animation="setUpIn 1.3s linear forwards";
    document.getElementById("setBtn").style.animation="setUpOut .5s linear forwards";
    document.getElementsByClassName("clock")[0].style.transitionDelay=".15s";
    document.getElementById("birthTicker").style.transitionDelay=".05s";
    document.getElementsByClassName("about")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("about")[0].style.visibility="hidden";
    document.getElementsByClassName("themes")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("themes")[0].style.visibility="hidden";
    document.getElementsByClassName("setupForm")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("setupForm")[0].style.visibility="hidden";
    document.getElementsByClassName("focusMode")[0].style.opacity="0";
    setTimeout(()=>{document.getElementsByClassName("focusMode")[0].style.visibility="hidden"},800);
});

document.getElementById("closeOption").addEventListener("click",() => {
    document.getElementsByClassName("about")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("themes")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementsByClassName("profile")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementById("closeOption").style.visibility="hidden";
    document.getElementById("birthTicker").style.transitionDelay=".5s";
    document.getElementById("birthTicker").style.visibility="visible";
    document.getElementsByClassName("clock")[0].style.transitionDelay=".4s";
    document.getElementsByClassName("clock")[0].style.visibility="visible";
    document.getElementById("setUpBtn").style.animation="setUpOut .5s linear forwards";
    document.getElementsByClassName("setupForm")[0].style.animation="optionsInfoOut .5s ease-in both";
    document.getElementById("setBtn").style.animation="setUpOut .5s linear forwards";
    document.getElementsByClassName("focusMode")[0].style.visibility="visible";
    document.getElementsByClassName("focusMode")[0].style.opacity="1";
});

document.getElementById("blackTheme").addEventListener("click",() => {
    document.getElementsByClassName("changeTheme")[0].style.backgroundColor="black";
    document.body.style.filter="invert(0)";
    document.getElementById("black").checked=true;
    let b = document.body.style;
    let g1 = document.getElementsByClassName("gred1")[0].style;
    let g2 = document.getElementsByClassName("gred2")[0].style;
    let g3 = document.getElementsByClassName("gred3")[0].style;
    
    setTimeout(() => {
        b.backgroundImage = "linear-gradient(to top left,#43003C 1%,#2E0068 15%,#100070 28%,#120147 49%,#140C48 67%,#060123 84%)";
        g1.backgroundImage = "linear-gradient(60deg,#09e1e162 10%,#17005800 50%)";
        g2.backgroundImage = "radial-gradient(closest-side at 40% 40% , rgba(2, 3, 49, 0.8),rgba(20, 20, 221, 0.149))";
        g3.backgroundImage = "radial-gradient( closest-side at 95% 4%, rgba(2, 76, 146, 0.845) 30%, rgba(189, 68, 44, 0.05) 1000%, rgba(135, 207, 235, 0) 5000%)";
    }, 1000); 
});
document.getElementById("whiteTheme").addEventListener("click",() => {
    document.getElementsByClassName("changeTheme")[0].style.backgroundColor="black";
    document.body.style.filter="invert(1)";
    document.getElementById("white").checked=true;
    
});

document.getElementById("dayTheme").addEventListener("click",() => {
    let b = document.body.style;
    let g1 = document.getElementsByClassName("gred1")[0].style;
    let g2 = document.getElementsByClassName("gred2")[0].style;
    let g3 = document.getElementsByClassName("gred3")[0].style;
    
    b.filter="invert(0)";
    document.getElementsByClassName("changeTheme")[0].style.backgroundColor="";
    g1.opacity="0";
    g2.opacity="0";
    g3.opacity="0";
    setTimeout(()=>{
        g1.backgroundImage="linear-gradient(60deg,#0008ff96 10%,#3061ff15 50%)";
        g2.backgroundImage="radial-gradient(closest-side at 40% 40% , rgba(35, 115, 227, 0.762),rgba(102, 82, 255, 0.318))";
        g3.backgroundImage="radial-gradient( closest-side at 95% 4%, rgba(36, 171, 255, 0.622) 30%, rgba(189, 68, 44, 0) 1000%, rgba(55, 180, 253, 0.319) 5000%)";
        b.backgroundImage="linear-gradient(to top left,#ce0d37 1%,#7642b5 15%,#6b54ef 28%,#574e72 49%,#6048f9 67%,#b65151 84%)";
        b.opacity="0"
        g1.opacity="1";
        g2.opacity="1";
        g3.opacity="1";
        b.opacity="1";
    },1000);
    document.getElementById("day").checked=true;
    
});

document.getElementById("nightTheme").addEventListener("click",() => {
    let b = document.body.style;
    let g1 = document.getElementsByClassName("gred1")[0].style;
    let g2 = document.getElementsByClassName("gred2")[0].style;
    let g3 = document.getElementsByClassName("gred3")[0].style;
    
    b.filter="invert(0)";
    document.getElementsByClassName("changeTheme")[0].style.backgroundColor="";
    document.getElementById("night").checked=true;
    
    g1.opacity="0";
    g2.opacity="0";
    g3.opacity="0";
    b.opacity="0"
    setTimeout(() => {
        b.backgroundImage = "linear-gradient(to top left,#43003C 1%,#2E0068 15%,#100070 28%,#120147 49%,#140C48 67%,#060123 84%)";
        g1.backgroundImage = "linear-gradient(60deg,#09e1e162 10%,#17005800 50%)";
        g2.backgroundImage = "radial-gradient(closest-side at 40% 40% , rgba(2, 3, 49, 0.8),rgba(20, 20, 221, 0.149))";
        g3.backgroundImage = "radial-gradient( closest-side at 95% 4%, rgba(2, 76, 146, 0.845) 30%, rgba(189, 68, 44, 0.05) 1000%, rgba(135, 207, 235, 0) 5000%)";
        
        b.opacity="1";
        g1.opacity="1";
        g2.opacity="1";
        g3.opacity="1";
    }, 1000);

});

function leadingZero(n){
    let num = n >= 0 && n <=9 ? "0" + n:n;
    return num;
}

let setUpBtn = document.getElementById("setUpBtn");
let setupForm = document.getElementsByClassName("setupForm")[0] ;
let profile = document.getElementsByClassName("profile")[0];
let setAlert = document.getElementById("set");

setUpBtn.addEventListener("click", form);
setAlert.addEventListener("click", form);

function form () {
    document.getElementsByClassName("clock")[0].style.visibility="hidden";
    document.getElementById("birthTicker").style.visibility="hidden";  
    document.getElementById("closeOption").style.visibility="visible";
    document.getElementsByClassName("profileSetupMsg")[0].style.top="-100%"
  document.getElementsByClassName("setupForm")[0].style.animation="optionsInfoIn 1s";
  setupForm.style.visibility="visible";
  document.getElementById("setBtn").style.animation="setUpIn 1.3s linear forwards";
  document.getElementsByClassName("profile")[0].style.animation="optionsInfoOut .5s ease-in both";
  document.getElementById("setUpBtn").style.animation="setUpOut .5s linear forwards";
  profile.style.visibility="hidden";
}


let set = document.getElementById("setForm") ;
set.addEventListener("submit",(e) => {
  e.preventDefault();
  let name = set.elements[0].value;
  let dob = set.elements[1].value;;
  let tob = set.elements[2].value;
  localStorage.setItem("name",name+"="+dob+"="+tob)
  setupForm.style.visibility="hidden";
  checkProfile();
  profile.style.visibility="visible";
  document.getElementsByClassName("profile")[0].style.animation="optionsInfoIn 1s";
  document.getElementById("setUpBtn").style.animation="setUpIn 1.3s linear forwards";
});

let closeMsg = document.getElementById("closeMsg");
closeMsg.addEventListener("click", () => {
    document.getElementsByClassName("profileSetupMsg")[0].style.top="-100%";
    document.getElementsByClassName("profileSetupMsg")[0].style.opacity="0";
});

// localStorage.clear();
function checkProfile(){
  let checkProfile = localStorage.getItem("name");
  if(checkProfile){
    let profile = document.getElementsByClassName("profileInfo")[0];
    let editBtn = document.getElementById("setUpBtn");
    let profileInfo = checkProfile.split("=");
    let name = profileInfo[0];
    let dob = profileInfo[1];
    let tob = profileInfo[2];
    profile.innerHTML = 
    `<h1>Hey ${name} !</h1>
    <h4>Your Date of Birth is<h4>
    <h3> ${dob} </h3>
    <h4>Your Time of Birth is<h4>
    <h3> ${tob} </h3>
    <h4><strong>Thank you</strong> for using <br> <strong>The Birth Clock.</  strong></h4>
    <h4>&copy Dj Artimus.</h4>`; 
    editBtn.innerHTML = "Edit";
    dob = dob.split("-");
    y = Number(dob[0]);
    m = Number(dob[1]-1);
    d = Number(dob[2]);

    tob = tob.split(":");
    hr = Number(tob[0]);
    min = Number(tob[1]);
  }
  else{
    setTimeout(() => {
        document.getElementsByClassName("profileSetupMsg")[0].style.visibility="visible";
        document.getElementsByClassName("profileSetupMsg")[0].style.opacity="1";
        document.getElementsByClassName("profileSetupMsg")[0].style.top="2vh";
    }, 5000);
  }
}
checkProfile();


setTimeout(() => {
    if(sessionStorage.getItem("betterExperienceMsgCount")==null){
    document.getElementsByClassName("betterExperienceMsg")[0].style.opacity="1"; 
    document.getElementsByClassName("betterExperienceMsg")[0].style.visibility="visible"; 
}}, 1000);
// }

document.getElementById("ok").addEventListener("click", () => {
    document.getElementsByClassName("betterExperienceMsg")[0].style.opacity="0";
    setTimeout(() => {
        document.getElementsByClassName("betterExperienceMsg")[0].style.visibility="hidden";
    }, 2000);
    sessionStorage.setItem("betterExperienceMsgCount","1");        
})

// localStorage.clear();

// let isUserScrolling = false;
// let scrollAmount = 0;
// const scrollStep = 1; // Adjust this value for faster/slower scrolling
// const scrollInterval = 30; // Adjust this value for smoother/less smooth scrolling
// let scrollTimeout;

// function smoothScroll() {
//   const div = document.getElementsByClassName('about')[0];

//   function scrollContent() {
//     if (!isUserScrolling) {
//       if (scrollAmount < div.scrollHeight - div.clientHeight) {
//         scrollAmount += scrollStep;
//         div.scrollTop = scrollAmount;
//       } else {
//         scrollAmount = 0; // Reset to top when reaching the bottom
//       }
//     }
//   }

//   setInterval(scrollContent, scrollInterval);

//   div.addEventListener('scroll', () => {
//     isUserScrolling = true;
//     clearTimeout(scrollTimeout);
//     scrollTimeout = setTimeout(() => {
//       isUserScrolling = false;
//     }, 1); // Adjust the timeout duration as needed
//   });

//   div.addEventListener('wheel', () => {
//     isUserScrolling = true;
//     clearTimeout(scrollTimeout);
//     scrollTimeout = setTimeout(() => {
//       isUserScrolling = false;
//     }, 2000); // Adjust the timeout duration as needed
//   });

//   div.addEventListener('touchmove', () => {
//     isUserScrolling = true;
//     clearTimeout(scrollTimeout);
//     scrollTimeout = setTimeout(() => {
//       isUserScrolling = false;
//     }, 2000); // Adjust the timeout duration as needed
//   });
// }
