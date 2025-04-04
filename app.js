'use strict';

let nowTime = new Date();

let nowHour = nowTime.getHours();
let nowMin = nowTime.getMinutes();
let nowSec = nowTime.getSeconds();

const Hour = document.getElementById('Hour');
const Min = document.getElementById('Min');
const Sec = document.getElementById('Sec');

let timeNoteIn = document.getElementById('timeNote');
let timeNote = 24;

timeNoteIn.addEventListener('change', () => {
        for (let i = 0; i < timeNoteIn.length; i++) {
            if (timeNoteIn[i].checked) {
                timeNote = document.timeForm.timeNoteIn.value;
            }
        }
    }
)

window.setInterval(() => {
    nowTime = new Date();
    nowHour = nowTime.getHours();
    nowMin = nowTime.getMinutes();
    nowSec = nowTime.getSeconds();

    
    if (timeNote == '24') {
        Hour.textContent = nowHour;
        Min.textContent = nowMin;
        Sec.textContent = nowSec;
    } else if (timeNote == '12') {
        if(nowHour > 12) {
            Hour.textContent = nowHour - 12;
        } else {
            Hour.textContent = nowHour;
        }
        Min.textContent = nowMin;
        Sec.textContent = nowSec;
    }
}, 1000);
// console.log(nowHour);
// console.log(nowMin);
// console.log(nowSec);

const HOURTIME = ['firstHour', 'secondHour'];
const MINTIME = ['firstMin', 'secondMin'];
const SECTIME = ['firstSec', 'secondSec'];

function processTimeUnits(timeString, timeArray, numberArray) {
    console.log(timeString);
    timeArray = timeString;
    console.log(timeArray);
    numberArray = Number(timeArray);
    console.log(numberArray);
    return numberArray;
}

let hourTime;
let minTime;
let secTime;

let hourNumber;
let minNumber;
let secNumber;

// console.log(String(nowHour));
// console.log(String(nowMin));
// console.log(String(nowSec));

// console.log(typeof String(nowHour));
// console.log(typeof String(nowMin));
// console.log(typeof String(nowSec));


button.addEventListener('click', () => {
    console.log('click the button!!');
    processTimeUnits(String(nowHour), hourTime, hourNumber);
    processTimeUnits(String(nowMin), minTime, minNumber);
    processTimeUnits(String(nowSec), secTime, secNumber);

    console.log(hourNumber);
    let unihour = unicode(hourNumber);
    console.log(unihour);
});

// console.log(hourTime);
// console.log(minTime);
// console.log(secTime);

// console.log(hourNumber);
// console.log(minNumber);
// console.log(secNumber);

function unicode(number) {
    console.log(number);
    if (number >= 0 && number <= 9) {
        return 'U+003' + number;
    }
}