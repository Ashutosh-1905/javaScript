let marks = {
    ashu : 95,
    shubham : 78,
    lovish : 75,
    mona :  30
}
// problem 1
for (let i = 0; i< Object.keys(marks).length; i++){
    console.log("the  marks of "+ Object.keys(marks)[i] + " are " +marks[Object.keys(marks)[i]]);
}

//problem 2

for (let key in marks){
    console.log("the marks of "+  key + " are "+ marks[key]);
}

//  problem 3

let currectNumber = 19;
let i ;
while ( i != currectNumber){0
    console.log("try again");
    i = prompt("Enter a number")
}

console.log("You have inntered the currect number");

//  problem 4

const  mean = (a,b,c,d) => {
    return (a + b + c + d) / 4;
}

console.log(mean(10,20,30,40));