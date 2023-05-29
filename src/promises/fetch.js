import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlAPI) {
    return fetch(urlAPI);
};

function fetchExample1() {
    fetchData(`${API}/products`)
        .then(response => response.json())
        .then(products => {
            console.log(products[0]);
        })
        .then(() => {
            console.log('Hello');
        })
        .catch(error => console.log(error));
};
// fetchExample1();

function fetchExample2() {
    fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        return fetchData(`${API}/products/${products[0].id}`)
    })

    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })

    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(()=> console.log('Finally'));
}
fetchExample2();