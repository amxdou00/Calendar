const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]


const current_year = new Date().getFullYear();
const current_month = new Date().getMonth();
const current_date = new Date().getDate();
const last_day = new Date(new Date().getFullYear(), current_month + 1, 0).getDate()


const month_element = document.querySelector(".header h1") 
month_element.innerHTML = months[current_month];

const day_element = document.querySelector(".header p")
day_element.innerHTML = new Date().toDateString();

let days = ""
let first_day = new Date(new Date().getFullYear(), current_month, 1).getDay()
console.log(first_day)

for(let j = 1; j < first_day; j++){
    days += `<div class="empty"></div>`;
}

for(let i = 1; i <= last_day; i++) {
    if (i == new Date().getDate()){
        days += `<div class="today">${i}</div>`
    }
    else {
        days += `<div>${i}</div>`
    }
}

days_element = document.querySelector(".days");
days_element.innerHTML = days;




