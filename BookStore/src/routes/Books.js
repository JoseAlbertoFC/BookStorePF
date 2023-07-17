const { Router } = require("express");
const { getBooks } = require("../handlers/Books/GET/getBooks");
const { postBook } = require("../handlers/Books/POST/postBook");
const { putBook } = require("../handlers/Books/UPDATE/putBook");
const { deleteBook } = require("../handlers/Books/DELETE/deleteBook");
const { getBookById } = require("../handlers/Books/GET/getBookById");
const { restoreBook } = require("../handlers/Books/UPDATE/restoreBook");
const { getDeletedBooks } = require("../handlers/Books/GET/getDeletedBooks");

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

/**
 * @swagger
 * /postBook:
 *   post:
 *     summary: Crear un nuevo libro
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               country:
 *                 type: string
 *               language:
 *                 type: string
 *               image:
 *                 type: string
 *               gender:
 *                 type: string
 *               sinopsis:
 *                 type: string
 *               price:
 *                 type: number
 *               publishedDate:
 *                 type: string
 *               pdfLink:
 *                 type: string
 *               editorial:
 *                 type: string
 *               numPages:
 *                 type: number
 *     responses:
 *       200:
 *         description: Nuevo libro creado exitosamente
 *       500:
 *         description: Error al crear el libro
 */

/**
 * @swagger
 * /updateBook/{id}:
 *   put:
 *     summary: Actualizar un libro existente
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del libro a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               country:
 *                 type: string
 *               language:
 *                 type: string
 *               image:
 *                 type: string
 *               gender:
 *                 type: string
 *               sinopsis:
 *                 type: string
 *               price:
 *                 type: number
 *               publishedDate:
 *                 type: string
 *               pdfLink:
 *                 type: string
 *               editorial:
 *                 type: string
 *               numPages:
 *                 type: number
 *     responses:
 *       200:
 *         description: Libro actualizado exitosamente
 *       404:
 *         description: Libro no encontrado
 *       500:
 *         description: Error al actualizar el libro
 */

/**
 * @swagger
 * /deleteBook/{id}:
 *   delete:
 *     summary: Eliminar un libro existente
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del libro a eliminar
 *     responses:
 *       200:
 *         description: Libro eliminado exitosamente
 *       404:
 *         description: Libro no encontrado
 *       500:
 *         description: Error al eliminar el libro
 */


booksRoutes.get("/getBooks", getBooks);

booksRoutes.get("/getDeletedBooks", getDeletedBooks);

booksRoutes.get("/bookDetail/:id", getBookById);

booksRoutes.post("/postBook", postBook);

booksRoutes.put("/updateBook/:id", putBook);

booksRoutes.put("/restoreBook/:id", restoreBook);

booksRoutes.delete("/deleteBook/:id", deleteBook);



module.exports = { 
    booksRoutes 
};
