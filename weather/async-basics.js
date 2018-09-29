console.log("Premiére instruction");
setTimeout( () => {
    console.log("Asynchronous code");
}, 2000);
setTimeout(() => {
    console.log("Another asynchronous code");
}, 1000);
console.log("Deuxiéme instruction");