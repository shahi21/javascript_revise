function fetchData(callback){
    setTimeout(()=>{
        console.log('Data fetched');
        callback();
    },2000);
}

function processData(){
    console.log('Data processed');
}
fetchData(processData)