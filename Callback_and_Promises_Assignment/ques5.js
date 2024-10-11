function multiplyCallback(arr, callback){
    const ans = arr.map(num=>num*2);
    callback(ans);
}

const nums = [1,2,3,4,5];

multiplyCallback(nums, (ans)=>{
    console.log(ans);
})