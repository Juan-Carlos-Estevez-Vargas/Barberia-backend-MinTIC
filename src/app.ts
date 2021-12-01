// Importando la librería express
import express from 'express';
import barberoRoutes from './routes/barbero';

// Declarando express y el puerto
const app = express();
const port = 3000;

// Usando el body de la petición como un json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

barberoRoutes(app);

// Middleware: Función que se ejecuta antes
// Obteniendo ruta la cual tiene su requerimiento y su respuesta
app.get('/', (req, res, next) => {
    // Enviando respuesta al frontend
    res.status(401).send('Prueba servidor');
});

// Montando el servidor con el método listen()
// El método listen recibe como argumentos el puerto y una funcion la cuál se escuchará
app.listen(port, () => {
    // Retornando la escucha de express
    return console.log(`Servidor corriendo el el puerto ${port}`);
});