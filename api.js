const url = ('https://jsonplaceholder.typicode.com/posts')


const readApiPromise = () =>{
    const request = fetch('url')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => console.log('Finalizado'))
}

const readApiAsync = async () =>{
    const requestA = await fetch(url)
    const res = await requestA.json();
    console.log(res)
}

readApiPromise();
readApiAsync()