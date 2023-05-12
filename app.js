// Importar el modulo http
//import http from 'http';

// Importar express
import express from 'express';

// Crear una instancia de express
const app = express(); // (req,res) => {UN MONTON DE CÓDIGO}
app.use((req, res, next) => {
    console.log("😎 Ejecutando el middleware 1");
    // Incovando el siguiente Middleware
    next();
});
app.use((req, res, next) => {
    console.log(`${req.method}-${req.url}`);
    next();
});
app.use((req, res, next) => {
    console.log("👀 Respondiendo al cliente");
    res.send(`
    <h1>Welcome to Express ♥ </h1>
    <p>This is my awesome app</p>
    `);
});

// Creando el servidor
//const server = http.createServer(app);

// Definir puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancar el servidor 
app.listen(port, ip, (error) => {
    console.log("📢 Sirviendo en http://localhost:3000");
    // En codespaces
    //console.log("📢 Sirviendo en ${process.env.IP}:${process.env.IP}");
});