let getData = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data Fetched");
        },2000)
    });
}

getData().then(result =>{
    console.log(result);
})