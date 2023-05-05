const person = {
    fullname : function(city, country){
        return this.firstName + ' ' + this.lastName + ', '+ city + ' ,'+ country;  
    } 
}

const person1 ={
    firstName : "Ashutosh",
    lastName : "Dhakad"
}

const person2 ={
    firstName : "praveen",
    lastName : "patwakar"
}

console.log(person.fullname.apply(person1,["indore", "india"]));
console.log(person.fullname.apply(person2,["Mahu", "india"]));