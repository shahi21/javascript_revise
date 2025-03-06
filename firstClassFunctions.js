//function statement aka function declaration
function a(){
    console.log("Hello, World!");
}
a();


// function  expression
var b=function(){
    console.log("hello")
}
b();

//difference is in hoisting, function statements are hoisted but function expressions returns undefined

//ANONYMOUS FUNCTIONS
//anonymous functions are functions without names
//they cannot be used as functions statements, they are used in function expressios


//NAMED FUNCTION EXPRESSION
//naming the fucntion in function expressions
var b=function xyz(){
    console.log("hello")
}
b();
//if xyz()  then it gives not defined



//FIRST CLASS FUNCTIONS
//passing another function inside a function 
//the ability of functions to be used as values
var b=function (param1){
    console.log(param1);
}
function xyz(){

}
b(xyz);