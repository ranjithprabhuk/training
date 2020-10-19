const today = new Date();

console.log(today.getDate(), today.getFullYear(), today.getTime(), today.getDay());


const pastDate = new Date('01/01/2019');
pastDate.setTime('1602655371047');
pastDate.setMinutes(45, 45, 45);
pastDate.setHours(6)
console.log('past date', pastDate);


// moment
// moment-timezone
