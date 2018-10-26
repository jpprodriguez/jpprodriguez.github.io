const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const initDate = new Date(2014, 8, 0, 0, 0, 0);
const endDate = new Date(2016, 3, 0, 0, 0, 0, 0);

const monthDiff = (d1, d2) => {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

const moveToDate = (initDate, endDate, time, id) => {
    const dynamicDate = new Date(initDate);
    const transitionTime = (monthDiff(initDate,endDate) + 1) * time / 1000 + 's';
    document.querySelector(".red").style.transitionDuration = transitionTime;
    setTimeout(()=>{
        document.querySelector(".red").classList.add("end");
},0)
    const interval =setInterval(() => {
        dynamicDate.setMonth(dynamicDate.getMonth() + 1);
    document.getElementById(id).innerHTML = months[dynamicDate.getMonth()] + ' ' + dynamicDate.getFullYear();
    if(dynamicDate.getTime() >= endDate.getTime()) {
        clearInterval(interval);
    }
},time);
}

// window.onload = moveToDate(initDate, endDate,200,'text');


