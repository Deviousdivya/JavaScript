// Immediately Invoked Functions Expressions

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
}) ('Divya')