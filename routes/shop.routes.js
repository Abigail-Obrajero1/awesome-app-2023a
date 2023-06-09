// Importando el enrutador de express
import { Router } from 'express';

// Importando el gestor de rutas
import path from 'path';

// Creando una instancia del enrutador de express
const router = Router();

// GET /
router.get('/', (req, res) => {
    console.log("📢 Sirviendo la ruta '/'");
    // Se contesta al server
    res.render('shop');
    // res.render('shop', { layout: false });
});

// GET /about
router.get('/about', (req, res) => {
    console.log("📢 Sirviendo la ruta '/about'");
    // Se contesta al server
    res.send(`
    <h1 style="color: teal">📃 About </h1>
    <p style="color: #555">App for Fullstack Web Dev Course I!</p>
    `);
});

export default router;