// Importando la librería express
import express from 'express';

// Declarando express y el puerto
const app = express();
const port = 3000;

//
app.get('/', (req, res) => {
    // Enviando respuesta al frontend
    res.send('Prueba servidor');
});

// Poniendo express a la escucha con el método listen()
// El método listen recibe como argumentos el puerto y una funcion la cuál se escuchará
app.listen(port, () => {
    // Retornando la escucha de express
    return console.log(`Servidor corriendo el el puerto ${port}`);
});