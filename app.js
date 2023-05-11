// Importar el modulo http
import http from 'http';

// Importar express
import express from 'express';

// Crear una instancia de express
const app = express(); // (req,res) => {UN MONTON DE CÓDIGO}

// Creando el servidor
const server = http.createServer(app);

// Definir puertos
const port = 3000;
const ip = "0.0.0.0";

// Arrancar el servidor 
server.listen(port, ip, (error) => {
    console.log("📢 Sirviendo en http://localhost:3000");
    // En codespaces
    //console.log("📢 Sirviendo en ${process.env.IP}:${process.env.IP}");
});