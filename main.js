let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");
let yearItem = document.querySelector('#year');

let countDown = () => {
    let currentDate = new Date();

    let year = currentDate.getMonth();
    let days = currentDate.getDay();
    let hours = currentDate.getHours();
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();


    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minItem.innerHTML = min;
    secItem.innerHTML = sec;
    yearItem.innerHTML = year;
}

countDown();

setInterval(countDown, 1000);

const eachYear = document.getElementById('indiYear');

const actYear = new Date();
const preYear = actYear.getUTCFullYear();

eachYear.innerHTML += preYear;