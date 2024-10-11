const sumAsync = (a,b,callback)=>{
    
    setTimeout(()=>{
        callback(a+b);
    },1000);
};


sumAsync(3,5, (sum)=>{
    console.log(sum);
})