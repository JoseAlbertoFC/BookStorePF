const { Router } = require("express");
const { getBooks } = require("../handlers/Books/GET/getBooks");

const booksRoutes = Router();

//TODO Documentacion de Swegger

/**
 * @swagger
 * /getBooks:
 *   get:
 *     summary: Obtener libros
 *     description: Ruta para obtener libros.
 *     tags: [Books]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Título del libro a buscar (opcional).
 *     responses:
 *       200:
 *         description: Lista de libros obtenida correctamente.
 *       400:
 *         description: Error en la solicitud de obtención de libros.
 */

booksRoutes.get("/getBooks", getBooks);

module.exports = { 
    booksRoutes 
};
