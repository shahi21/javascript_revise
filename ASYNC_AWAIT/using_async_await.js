//async function always returns a promise
// await makes the function pause until a promise resolves

function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log('data fetched successfully')
        },2000);
    })
}

async function getdata(){
    console.log('fetching data...');
    let result=await fetchData();
    console.log(result);
}

getdata();