let animal={
    eats: "yes"
};

let rabbit=Object.create(animal);
console.log(rabbit.eats);//yes

console.log(Object.getPrototypeOf(rabbit))//{eats:'yes'}
console.log(Object.getPrototypeOf(rabbit)===animal);//true


console.log(Object.setPrototypeOf(rabbit,{}));//{}
console.log(Object.getPrototypeOf(rabbit));//{}
console.log(Object.getPrototypeOf(rabbit)===animal);//false

//Object.create method has an optional second argument:property descriptors.
//If you pass a property descriptor, it will be used to define the property on the new object

let animal1={
    eats:true
};
let rabbit1=Object.create(animal,{
    jumps:{
        value:true
    }
});
console.log(rabbit1.jumps);//true