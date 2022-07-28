const week = new Date().getDate()
const day = [23, 25, 21, 27, 28, 29, 30]
const years = new Date().getFullYear()
var curr = new Date; // get current date
var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
var last = first + 6; // last day is the first day + 6
var firstday = new Date(curr.setDate(first)).getDate();
var lastday = new Date(curr.setDate(last)).getDate();
var month = new Date().getMonth();
let hasil = years === years && month === month && week >= firstday && week <= lastday
const data = day.map(x => {
    if(hasil){
        return x
    }
    return console.log(week);
})

return console.log(data.filter(y => y >= firstday && y <= lastday));
