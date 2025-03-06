//what is a callback function in javascript
//a callback function is a function passed as an argument to another function
function x(y){
console.log(x);
y();
}
x(function y(){
console.log('y');
}) //here y is called as the callback function

setTimeout(function (){
    console.log("Hello World");
},5000); //here it is callback function