//Testing for resolve


// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let success=true;
//             if(success){
//                 resolve("Data successfullly fetched");
//             }else{
//                 reject("Data failed to fetch");
//             }
//         },2000);
//     });
// }

// fetchData()
//             .then((result)=>{
//                 console.log(result);
//             })
//             .catch((error)=>{
//                 console.log(error);
//             });


//Testing for reject
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=false;
            if(success){
                resolve("Data successfullly fetched");
            }else{
                reject("Data failed to fetch");
            }
        },2000);
    });
}

fetchData()
            .then((result)=>{
                console.log(result);
            })
            .catch((error)=>{
                console.log(error);
            });