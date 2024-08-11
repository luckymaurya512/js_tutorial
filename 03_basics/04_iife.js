// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                               //semicolon is necessary in this case.. in all case except last case

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('lucky')                        // can use semi colon

