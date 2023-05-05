// if , else , else if = statements

let budget = 50000;

if (budget > 6000){
    console.log("Will do dinner in the hotel");
}else if (budget > 4500 ){
    console.log("Will do dinner in the 3 star hotel");
}else if (budget > 3000){
    console.log("will do dinner in the 2 star hotel");
}else {
    console.log("Run if "+ "All " + "Conditions are false");
}
// After 1st  condition iws true contrtoll get out of the scope 
console.log("I am outside of the block");


// nested if statement

let num = 20;

if ( num >19){
    console.log("Run if first condition is true");

    if( num > 10){
        console.log("Run if both the conditions are true");

        if( num >15){
            console.log("Run if All the conditions are true");
        }
    }
}

// break and continue statements


//  continue 
for( let i = 1; i<=10; i++){
    if (i == 5){
        continue;
    }
    console.log("value of i =",i);
}

// break statements

// used to terminate the loop and controll transfer from outside the loop

for (let i = 1; i<=10; i++){
    if(i ==6){
        break;
    }
    console.log("value of i =",i);
}