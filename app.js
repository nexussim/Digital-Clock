let time = document.getElementById('time');
let amPm = document.getElementById('AmPmPosition');
let timeFormat = document.getElementById('timeFormat');
timeFormat.setAttribute('completed', false)
let divHour = document.createElement('div');
let divMinutesColon = document.createElement('div');
let divMinutes = document.createElement('div');
let divSecondsColon = document.createElement('div');
let divSeconds = document.createElement('div');
time.appendChild(divHour);
time.appendChild(divMinutesColon);
time.appendChild(divMinutes);
time.appendChild(divSecondsColon);
time.appendChild(divSeconds);

function changeFormatListener() {
    if (timeFormat.attributes.completed.value === 'false') {
        timeFormat.attributes.completed.value = 'true';
    } else {
        timeFormat.attributes.completed.value = 'false';
    }
}

setInterval(function displayTime() {
    
    let currentTime = new Date();
    let getHours = currentTime.getHours();

    if (getHours < 12) {
        amPm.textContent = 'am';
    } else {
        amPm.textContent = 'pm';
    }

    if (timeFormat.attributes.completed.value === 'false') {
        getHours = currentTime.getHours();
    } else {
        getHours = hours12(getHours);
    }
    
    
    // ADD EVENT LISTENER FOR ABILITY TO CHOOSE MILITARY OR REGULAR TIME
    
    let hours = getHours.toString();
    let getMinutes = currentTime.getMinutes();
    let minutes = getMinutes.toString();
    let getSeconds = currentTime.getSeconds();
    let seconds = getSeconds.toString();

    addDigit(hours, divHour)
    divMinutesColon.textContent = ':';
    addDigit(minutes, divMinutes)
    divSecondsColon.textContent = ':';
    addDigit(seconds, divSeconds)
    
}, 250)

function addDigit(time, location) {
    let addZero = '0';
    if (time.length === 1)  {
        let twoIntegerHour = addZero.concat(time);
        location.textContent = twoIntegerHour;
    } else {
        location.textContent = time;
    }
}

function hours12(date) { 
    return (date + 24) % 12 || 12; 
}