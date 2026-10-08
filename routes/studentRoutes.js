import * as studentController from '../controller/studentController.js';
import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/all', studentController.fetchAllstudent);
studentRoutes.post('/', studentController.createstudent);

export default studentRoutes;
