function racePromises(promises){
    return Promise.race(promises)
        .then(result => {
            console.log("First resolvef/rejected: ",result);
            return result;
        })
        .catch(error =>{
            console.error("First rejected : ", error);
            return error;
        });
}

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Promise1 resolved');
    }, 2000);
});
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Promise2 resolved');
    }, 1000);
});
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Promise3 resolved');
    }, 3000);
});


racePromises([promise1, promise2, promise3]);