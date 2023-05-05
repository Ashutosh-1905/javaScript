const calculate = (a, b, operation)=>{
    return operation(a, b);
}

// Method 1

const addition = calculate(5,8, function(num1, num2){
    return  num1 + num2;
});

console.log(addition);

// method 2

const subtraction = (a, b)=>a-b;

    const subResult = calculate( 8, 3, subtraction);

    console.log(subResult);

    // method 3

    function maltiply(a, b) {
        return a * b;
    }

    const mulResult = calculate(5,12, maltiply);

    console.log(mulResult);