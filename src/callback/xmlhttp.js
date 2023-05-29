const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

// Creamos una función para llamar a la api, el callback sería la respuesta o error que obtengamos de la API
function fetchData(urlAPI, callback) {
    // Hacemos una instancia de la xmlhttp Request
    let xhttp = new XMLHttpRequest();

    // Utilizamos el método open para iniciar la solicitud y recibe 3 argumentos: El tipo, la url y el estado.
    xhttp.open('GET', urlAPI, true);

    // Creamos una lógica para manejar la respuesta 
    xhttp.onreadystatechange = function (event) {
        // Vemos si el estado del request está completo con el código 4
        if (xhttp.readyState === 4) {
            // Si la respuesta del estado del servidor es 200, todo es correcto
            if (xhttp.status === 200) {
                // Podemos usar callback para traer como código null y como respuesta un objeto Json
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                // Creamos una nueva instancia de error y retornamos en el callback. Primero el error y luego como respuesta null
                const error = new Error('Error' + urlAPI);
                return callback(error, null);
            };
        };
    };
    // Enviamos la petición
    xhttp.send();
};

// Función para hacer la lógica de traer los datos
fetchData(`${API}/products`, function(error1, data1) {
    // Si hay un error devolverlo por consola
    if (error1) return console.error(error1);
    // Además vamos a llamar otra vez a fetch data pero con error2 y data2

    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        // Anidamos otro fetchData y ahora vamos a llamar a la categoría
        // Usamos optional changing por si no existe
        // Se recomienda anidar máximo 3 fetchData para no caer en un callback Hell

        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.errror(error3);
            // Asignamos los data a la información pedida de la API y hacemos console.log
            console.log(data1[3]); // Se trae un producto
            console.log(data2.title); // Se trae el título del producto
            console.log(data3.name); // Se trae el name de la categoría
        });
    });
});
