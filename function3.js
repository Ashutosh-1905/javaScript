// higher order functions 

// function returning another function

let compliment = function(msg){
    return function(name){
        console.log(`${msg} ${name}`);
    }
};

let complimented = compliment("you are good coder");

complimented("Ashutosh");
complimented("Ashu");
