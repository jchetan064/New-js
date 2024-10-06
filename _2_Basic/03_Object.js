// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Chetan",
    "full name": "Chetan Joshi",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Chetan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log( JsUser.email)
console.log( JsUser["email"])
console.log(JsUser["full name"])
console.log( JsUser[mySym])

JsUser.email = "Chetan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Chetan@microsoft.com"
console.log(JsUser);

JsUser.achhaFunction = function(){
    console.log("Hello JS user");
}
JsUser.achhaFunctionTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.achhaFunction());
console.log(JsUser.achhaFunctionTwo());