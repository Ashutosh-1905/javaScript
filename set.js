// setTimeOut 

//  setTimeout( fun| code, delay, argument1, argument2);

function greeting(name){
    console.log(`Welcome ${name} to our party `);
}
setTimeout(greeting, 3000, "Praveen");


// internal greeting function

function greeting (name){
    console.log(`Welcome ${name} to our party`);
}

// setInterval(greeting, 2000, "Ashu");