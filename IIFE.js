// immidetaly invoked function expression
// executed only once

// now this is expression
(function(name){
    console.log("this function will never be execute again " , name );
})("IIFE")