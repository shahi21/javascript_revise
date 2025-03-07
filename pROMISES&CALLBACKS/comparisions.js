//USING CALLBACKS

// function getUser(callback){
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

//USING PROMISES

// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("User fetched");
//             resolve({ id: 1, name: "Alice" });
//         }, 2000);
//     });
// }

// function getOrders(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Orders fetched");
//             resolve(["Order1", "Order2"]);
//         }, 2000);
//     });
// }

// function processPayment(order) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Payment processed for", order);
//             resolve();
//         }, 2000);
//     });
// }

// getUser()
//     .then(user => getOrders(user.id))
//     .then(orders => processPayment(orders[0]))
//     .then(() => console.log("All Done!"))
//     .catch(error => console.error("Error:", error));


//USING ASYNC/AWAIT
    function getUser() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("User fetched");
                resolve({ id: 1, name: "Alice" });
            }, 2000);
        });
    }
    
    function getOrders(userId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Orders fetched");
                resolve(["Order1", "Order2"]);
            }, 2000);
        });
    }
    
    function processPayment(order) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Payment processed for", order);
                resolve();
            }, 2000);
        });
    }
    
    // Using async/await
    async function processOrder() {
        try {
            const user = await getUser();  // Waits for getUser() to complete
            const orders = await getOrders(user.id);  // Waits for getOrders() to complete
            await processPayment(orders[0]);  // Waits for processPayment() to complete
            console.log("All Done!");
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    processOrder();
    
