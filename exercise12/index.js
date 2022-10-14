const months =[
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
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const Time = document.querySelector("body .countdown .countdown_info .countdown_info-time");
const Deadline = document.querySelector("body .countdown .countdown_info .countdown_info-deadline");
const Items = document.querySelectorAll("body .countdown .countdown_info .countdown_info-deadline .deadline_format .deadline_format-time h4");

// thiết lập ngày tháng
//console.log(Items)
let temDate = new Date();
let temYear = temDate.getFullYear();
let tempMonth = temDate.getMonth();
let tempDay = temDate.getDate();
//let time = new Date(2021,2,4,00,00); đây là cho 1 thời gian cụ thể
let time = new Date(temYear,tempMonth, tempDay+11, 11,40,0);
//console.log(time)

let year = time.getFullYear();
let month = months[time.getMonth()];
let date = time.getDate();
//console.log(month);
let weekday = weekdays[time.getDay()];
//console.log(day);
let hour = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

Time.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hour}:${minutes}am`;

// chạy thời gian còn lại 
// cái trên là thời gian cho sẵn , cái dưới đây là thời gian còn lại đến ngày mà mình quy định đó
const futureTime = time.getTime();
//console.log(futureTime);

function getRemainingTime(){
    const today = new Date().getTime();
    //console.log(today);
    const t = futureTime - today;
    //console.log(t);
    // 1s= 1000ms
    // 1p = 60s
    // 1hr = 60min
    // 1d = 24hr

    //value in ms
    const oneDay = 24*60*60*1000;
    //console.log(oneDay);
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    // calcucalte all value
    let days = Math.floor(t/oneDay);
    //console.log(days);
    // let hours = Math.floor((t-days.oneDay)/oneHour);
    let hours = Math.floor(t%oneDay/oneHour);
    //console.log(hours);
    let minutes = Math.floor((t%oneHour)/oneMinute);
    let seconds = Math.floor((t%oneMinute)/1000);

    //set values array
    const values = [days,hours,minutes,seconds];
    // set truong họp =0
    function format(item){
        if(item<10){
            return item = `0${item}`;
        }
        return item
    }
    
    Items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });
    // xét trường hợp bị chạy quá thời gian mà ta xác định từ trước
    if(t<0){
        clearInterval(countdown);
        Deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expỉed</h4>`;
    }
};
// countdown - đếm ngược thời gian 
let countdown = setInterval(getRemainingTime, 1000); // hàm đếm ngược lại - cần tìm hiểu thêm
getRemainingTime();