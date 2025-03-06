function getUser(callback){
//     setTimeout(()=>{
//         console.log('User fetched');
//         callback({id:1,name:"Alice"});
//     },2000);
// }

// function getOrders(userId,callback){
//     setTimeout(()=>{
//         console.log("Orders fetched");
//         callback(['Order1','Order2']);
//     },2000);
// }

// function processPayment(order,callback){
//     setTimeout(()=>{
//         console.log('Payment processed for',order);
//         callback();
//     },2000);
// }

// getUser((user)=>{
//     getOrders(user.id,(order)=>{
//         processPayment(order[0],()=>{
//             console.log('Payment processed');
//         });
//     });
// });
