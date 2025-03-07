function User(name){
    this.name = name;
    this.sayHi=function(){
        console.log(`Hello, my name is ${this.name}.`);
    };
}

let john=new User('John');
john.sayHi();//Hello, my name is John