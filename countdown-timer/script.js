const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const returning = "1 Sep 2021";


function countdown(){
    const returningDate = new Date(returning);
    const currentDate = new Date();

    const diff = (returningDate - currentDate) / 1000;

    const days = Math.floor(diff/3600/24);
    const hours = Math.floor(diff / 3600) % 24;
    const minutes = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff % 60); 
    
    daysEl.innerText = days;
    hoursEl.innerText = formatTime(hours);
    minsEl.innerText = formatTime(minutes);
    secondsEl.innerText = formatTime(seconds);
    
}  

function formatTime(time)
{
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
