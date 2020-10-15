var time = document.getElementById('time');
var amPm = document.getElementById('AmPmPosition');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var div5 = document.createElement('div');
var div6 = document.createElement('div');
time.appendChild(div1);
time.appendChild(div2);
time.appendChild(div3);
time.appendChild(div4);
time.appendChild(div5);
time.appendChild(div6);


setInterval(function displayTime() {
    
    let currentTime = new Date();
    let getHours = currentTime.getHours();
    getHours = hours12(currentTime);
    let hours = getHours.toString();
    let getMinutes = currentTime.getMinutes();
    let minutes = getMinutes.toString();
    let getSeconds = currentTime.getSeconds();
    let seconds = getSeconds.toString();

    addDigit(hours, div1)
    div2.textContent = ':';
    addDigit(minutes, div3)
    div4.textContent = ':';
    addDigit(seconds, div5)
    
    if (hours < 12) {
        amPm.textContent = 'am';
    } else {
        amPm.textContent = 'pm';
    }

}, 250)

function addDigit(time, location) {
    var addZero = '0';
    if (time.length === 1)  {
        var twoIntegerHour = addZero.concat(time);
        location.textContent = twoIntegerHour;
    } else {
        location.textContent = time;
    }
}

function hours12(date) { 
    return (date.getHours() + 24) % 12 || 12; 
}