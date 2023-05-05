//  passing function as an argument0 (Higher order example)
// callback function

let upperCase = function(str){
    return str.toUpperCase();
}

let lowerCase = function(str){
    return str.toLowerCase();
}

let tarnsformer= function (str,fun){
    return fun(str);
}

console.log(tarnsformer("HELLO Ashu Dhakad",lowerCase));
