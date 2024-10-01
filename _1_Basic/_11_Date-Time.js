let newDate = new Date();
// console.log(newDate); /* 2024-10-01T05:42:06.136Z */

// console.log(newDate.toDateString()); /* Tue Oct 01 2024 */

// console.log(newDate.toISOString());  /* 10/1/2024 */

// console.log(newDate.toLocaleDateString()); /* 10/1/2024, 5:44:07 AM */

// console.log(newDate.toLocaleString()); /* 5:45:49 AM */

// console.log(newDate.toLocaleTimeString()); /* 5:45:49 AM */

// console.log(newDate.toString()); /* Tue Oct 01 2024 05:46:23 GMT+0000 (Coordinated Universal Time) */

// console.log(newDate.toTimeString()); /* 05:47:27 GMT+0000 (Coordinated Universal Time) */

// console.log(newDate.toUTCString()); /* Tue, 01 Oct 2024 05:48:05 GMT */


// console.log(typeof newDate); /* object */

let newDate1 = new Date(2024,0,20);
// console.log(newDate1.toDateString());


newDate1.toLocaleString('default',{
    weekday:"long",
});
console.log(newDate1.toDateString());

console.log(newDate1.toLocaleString());