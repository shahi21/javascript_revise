function loaduserData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('User data loaded');
        },2000);
    });
}
function loadPosts(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('User posts loaded');
        },1000);
    });
}

function loadComments(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('User comments loaded');
        },500);
    });
}


async function loading(){
    console.log('Loading data...');
    let results=Promise.all([loaduserData(),loadPosts(),loadComments()]);
    console.log(results);

}

loading();