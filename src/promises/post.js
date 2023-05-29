// Clase para aprender a hacer POST a una API con fetch

import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlAPI, data) {
    const response = fetch(urlAPI, {
        // Método de fetch para enviar datos
        method: 'POST',
        // Indicación de origen cors
        mode: 'cors',
        // Credenciales
        credentials: 'same-origin',
        // Encabezado de la solicitud
        headers: {
            // Tipo de contenido que se envía
            'Content-Type': 'application/json'
        },
        // Información a transmitir
        body: JSON.stringify(data)
    });
    return response; 
}

const data = {
    "title": "Alt-azimuth Telescope 2",
    "price": 150,
    "description": "Elegant telescope for those who wants to look further away",
    "categoryId": 1,
    "images": ["https://p.turbosquid.com/ts-thumb/wx/rtwuJS/SbqQPot9/pr1/jpg/1380620506/1920x1080/fit_q87/d15fc7f39447ee64da8b9ceba88f6b85cb01c004/pr1.jpg"]
}

postData(`${API}/products`, data) 
    .then(response => response.json())
    .then(data =>console.log(data));