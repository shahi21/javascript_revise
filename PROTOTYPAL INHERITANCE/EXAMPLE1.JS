let animal={
    eats:true
};
let rabbit={
    jumps:true
};

rabbit.__proto__=animal;
console.log(rabbit.eats);
console.log(rabbit.jumps);

//here, animal is the prototype of rabbit or
//rabbit ptototypically inherits from animal


//if we have METHOD  in animal,it can be called on rabbit

let animal1={
    eats:true,
    walk(){
        console.log("Animal walk");
    }
};
let rabbit1={
    jumps:true,
    __proto__:animal
};

rabbit1.__proto__=animal1;
console.log(rabbit.eats);
console.log(rabbit.jumps);
rabbit1.walk();