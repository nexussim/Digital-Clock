// Border with buttons
// containing section
// faceplate
// digital text
// glowing text
// live time

var time = document.getElementById('time');
var p1 = document.createElement('p');
var p2 = document.createElement('p');
var p3 = document.createElement('p');
var p4 = document.createElement('p');
var p5 = document.createElement('p');
time.appendChild(p1);
time.appendChild(p2);
time.appendChild(p3);
time.appendChild(p4);
time.appendChild(p5);





setInterval(function displayTime() {
    
    let currentTime = new Date();
    let addZero = '0';
    let getHours = currentTime.getHours();
    let getMinutes = currentTime.getMinutes();
    let getSeconds = currentTime.getSeconds();
    let hours = getHours.toString();
    let minutes = getMinutes.toString();
    let seconds = getSeconds.toString();

    
    if (hours.length === 1)  {
        var twoIntegerHour = addZero.concat(hours);
        p1.textContent = twoIntegerHour;
    } else {
        p1.textContent = hours;
    }

    p2.textContent = ':';
    
    if (minutes.length === 1)  {
        var twoIntegerMinute = addZero.concat(minutes);
        p3.textContent = twoIntegerMinute;
    } else {
        p3.textContent = minutes;
    }

    p4.textContent = ':';

    if (seconds.length === 1)  {
        var twoIntegerSeconds = addZero.concat(seconds);
        p5.textContent = twoIntegerSeconds;
    } else {
        p5.textContent = seconds;
    }

}, 250)
