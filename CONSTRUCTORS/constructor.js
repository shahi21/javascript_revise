//multiple objects can be created using constructir functionn and "new" operator

//constructor functions.
function Car(color,model){
    this.color=color;
    this.model=model;
}

let car= new Car("black","something");
console.log(car.color);
console.log(car.model);
//when a function is executed with new,:
//1.a new empty object is created and asssgined to "this".
//2.the function body executes, it modifies "this" and adds new propertis to it
//3.the value of this is returned;

