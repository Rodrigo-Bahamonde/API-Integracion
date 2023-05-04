import { response, request } from 'express'
import fetch from "node-fetch";


const RegionesGet = async (req = request, res = response) => {

    //Consulta api regiones
    var requestOptions = {
        method: 'GET',
    };

    
    let regions = await fetch("https://api.shipit.cl/v/regions", requestOptions)
        .then(response => response.text())
        .then(result => JSON.parse(result))
        .catch(error => console.log('error', error));

    res.json({
        regions
    })
};


export {
    RegionesGet,
}