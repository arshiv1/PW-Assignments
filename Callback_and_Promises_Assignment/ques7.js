function fetchMultipleData(urls){
    return Promise.all(
        urls.map(url => fetch(url).then(response => response.json()))
    )
    .then(responses =>{
        return responses;
    })
    .catch(error => {
        console.error("error : ", error);
    });
}

const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

fetchMultipleData(urls).then(data =>{
    console.log(data);
});