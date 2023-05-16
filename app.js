// Importar el modulo http
//import http from 'http';

// Importar express
import express from 'express';

// Crear una instancia de express
const app = express(); // (req,res) => {UN MONTON DE CÓDIGO}

// Middleware del parseo de datos del cliente
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log("😎 Ejecutando el middleware 1");
    // Incovando el siguiente Middleware
    next();
});
app.use((req, res, next) => {
    console.log(`${req.method}-${req.url}`);
    next();
});
// Middleware de proposito especifico
app.use('/about', (req, res) => {
    res.send(`
    <h1 style="color: teal">About.....</h1>
    <p style="color: #555">Esta es una página para aprender desarrollo web en Fullstack con JS</p>
    `);
});
// GET /add-product 
app.use('/add-product', (req, res, next) => {
    if (req.method === "POST") return next();
    // Sirviendo el formulario
    console.log("SIRVIENDO EL FORMULARIO");
    res.send(`
    <form action="/add-product" method="POST">
    <label for="title">Title</label>    
    <input id="title" type="text" name="title">
    <label for="description">Description</label>
    <input id="description" type="text" name="description">
    <button type="submit">Add Product</button>
    </form>
    `);
});
// POST /add-product
app.use('/add-product', (req, res) => {
    // Realizando extracción de los datos 
    // en la petición
    for (const prop in req.body) {
        console.log(`PROP: ${prop} : ${req.body[prop]}`);
    }
    // Redireccionamiento 
    res.redirect('/');
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