// Async await with api´s and try and catch
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// Hacemos una función asíncrona como una función anónima
async function fetchData(urlAPI) {
    // Hacemos un fetch a la url de la Api y lo guardamos en response
    const response = await fetch(urlAPI);
    // Transformamos la response a un objeto json y lo guardamos en data
    const data = await response.json();
    return data;
}

// Hacemos una función asíncrona como una función con nombre

const asyncFn = async (urlAPI) => {
    // Hacemos la estructura try and catch, en try va el bloque que queremos que se ejecute
    try {
        // Llamo a todos los productos
        const products = await fetchData(`${urlAPI}/products`);
        // Llamo a un producto dentro del listado que traje anteriormente con "products"
        const product = await fetchData(`${urlAPI}/products/${products[5].id}`);
        // Traer la categoría de "product"
        const category = await fetchData(`${urlAPI}/categories/${product.category.id}`);

        // Imprimimos por consola
        // console.log(products);
        console.log(product.title);
        console.log(category.name);
    }
    // En catch hacemos el bloque para recibir y manejar algún error que se presente
    catch (error) {
        console.error(error);
    }
}

asyncFn(API);