'use strict';

let nowTime = new Date();
let nowHour = nowTime.getHours();
let nowMin = nowTime.getMinutes();
let nowSec = nowTime.getSeconds();

let time = [];

let timeNoteIn = document.getElementById('timeNote');
let timeNote = '24'; // 初期値を文字列の '24' にしておくと比較が安全です

const Hour = document.getElementById('Hour');
const Min = document.getElementById('Min');
const Sec = document.getElementById('Sec');

let uniTime = [[null, null], [null, null], [null, null]];
const unicode = [[null, null], [null, null], [null, null]];

timeNoteIn.addEventListener('change', () => {
    const selectedValue = document.querySelector('input[name="timeNoteIn"]:checked').value;
    timeNote = selectedValue;
});

function updateTime() {
    nowTime = new Date();
    nowHour = nowTime.getHours();
    nowMin = nowTime.getMinutes();
    nowSec = nowTime.getSeconds();

    time = [nowHour, nowMin, nowSec];

    const timeText = time.map(timeElem => (timeElem < 10 ? '0' + timeElem : String(timeElem)));

    for (let i = 0; i < timeText.length; i++) {
        uniTime[i][0] = timeText[i].substring(0, 1);
        uniTime[i][1] = timeText[i].substring(1, 2);
    }

    for (let i = 0; i < uniTime.length; i++) {
        for (let j = 0; j < uniTime[i].length; j++) {
            unicode[i][j] = uniTime[i][j].codePointAt(0).toString(16);
        }
    }

    if (timeNote === '24') {
        Hour.textContent = `U+00${unicode[0][0]}U+00${unicode[0][1]}`;
        Min.textContent = `U+00${unicode[1][0]}U+00${unicode[1][1]}`;
        Sec.textContent = `U+00${unicode[2][0]}U+00${unicode[2][1]}`;
    } else if (timeNote === '12') {
        let displayHour = parseInt(timeText[0]);
        if (displayHour > 12) {
            displayHour -= 12;
        } else if (displayHour === 0) {
            displayHour = 12; // 真夜中の0時を12時と表示
        }
        const displayHourText = displayHour < 10 ? '0' + displayHour : String(displayHour);
        const hourUnicodeFirst = displayHourText.substring(0, 1).codePointAt(0).toString(16);
        const hourUnicodeSecond = displayHourText.substring(1, 2).codePointAt(0).toString(16);
        Hour.textContent = `U+00${hourUnicodeFirst}U+00${hourUnicodeSecond}`;
        Min.textContent = `U+00${unicode[1][0]}U+00${unicode[1][1]}`;
        Sec.textContent = `U+00${unicode[2][0]}U+00${unicode[2][1]}`;
    }
}

// 初回実行とタイマー設定
updateTime();
window.setInterval(updateTime, 1000);