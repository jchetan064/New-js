
let a = 100
const b = 200 
var c = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a);
    console.log("INNER: ", b);
    console.log("INNER: ", c);
}


console.log("Outer : ", a);
console.log("Outer : ", b);
console.log("Outer : ", c);


// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//      two()

// }

// // one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
//         // console.log(username + website);
//     }
//     // console.log(website);
// }

// // console.log(username);


// // ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }