import * as bookController from '../controller/bookController.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.get('/all', bookController.fetchAllBooks);
bookRoutes.post('/', bookController.createBook);
bookRoutes.put('/:id', bookController.editBook);

export default bookRoutes;