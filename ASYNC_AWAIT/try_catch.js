function fetchData(success){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(success){
                resolve("Data fetched successfully");
            }else{
                reject('Error fetching data');
            }
        },2000);
    });
}

async function getData(){
    try{
        console.log('Fetching data...');
        let result= await fetchData(false);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

getData();