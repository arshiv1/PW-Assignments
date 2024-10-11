let fetchData = async ()=>{
    const url = 'https://jsonplaceholder.typicode.com/todos/1'

    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(error){
        console.error("Error in fetching : ", error);
    }
};

fetchData().then(data => {
    console.log(data);
})