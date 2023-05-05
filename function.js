//  passing values (arguments and parameters)

// let invitation = function(name){
//     console.log(`welcome! ${name} you are invited on our event`);
// }

// invitation("Hariom Thanna");
// invitation("vijay Gaji");


// age calculation

let ageCalculation = function(birthYear, currentYear){
    let age = currentYear - birthYear;
    return age;
}

let functionResult=ageCalculation(2003, 2023);
console.log(`your age is = ${functionResult}`);

// arrow function

let invitation = name => 
    `welcome ${name} you are invited on our event`;
    console.log(invitation("Hariom Thanna"));
    console.log(invitation("vijay Gaji"));
    console.log(invitation());