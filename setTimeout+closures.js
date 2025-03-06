// function x(){
//     for(var i=1; i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log('hello');
// }
// x();

//outputs hello 6 6 6 6 6

//using let will fix this 

// function x(){
//     for(let i=1; i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log('hello');
// }
// x();    //outputs hello 1 2 3 4 5 

//fixing with var only using closures
function x(){
    for(var i=1; i<=5;i++){
        function close(i){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    close(i);
}
    console.log('hello');
}
x();  //outputs hello 1 2 3 4 5 