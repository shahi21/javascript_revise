function task1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Task 1 completed');
        },2000);
    });
}

function task2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Task 2 completed');
        },1000);
    });
}

async function runtasks(){
    console.log("Starting tasks...");
    let results=await Promise.all([task1(),task2()]);
    console.log(results);
}

runtasks();