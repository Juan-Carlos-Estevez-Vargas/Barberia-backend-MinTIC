// Importando la función para ejecutar sentencias SQL
import executeQuery from "../services/mysql.service";

// Función para obtener todos los barberos
const obtenerBarberos = async(req, res) => {
    /* Ejecutando el query y si se responde la promesa se imprime
       un json con la data */
    await executeQuery('SELECT * FROM barbero').then(response => {
        // Cuando se cumpla la promesa se envia esta data en forma de json
        const data = {
            message: `${response.length} datos encontrados`,
            data : response.length > 0 ? response : null
        };
        res.json(data);
    }).catch(error => {
        // Si no se cumple la promesa se envía el siguiente error
        res.status(500).send(error);
    });
};

const obtenerBarbero = (req, res) => {
    res.send('Entra a obtener barberos');
};

const agregarBarbero = (req, res) => {
    res.send('Entra a obtener barbero');
};

const actualizarBarbero = (req, res) => {
    res.send('Entra a obtener barbero');
};

const eliminarBarbero = (req, res) => {
    res.send('Entra a obtener barbero');
};

// Exportando los controladores
export { obtenerBarbero, obtenerBarberos, agregarBarbero, actualizarBarbero, eliminarBarbero };