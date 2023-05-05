const person = {
    fullname : function(){
        return this.firstName + ' ' + this.lastName;
    }
}

const person1 = {
    firstName : "Ashu",
    lastName :  "Dhakad"
}

const person2 = {
    firstName : "vijay",
    lastName :  "Dhakad"
}

console.log(person.fullname.call(person1));
console.log(person.fullname.call(person2));