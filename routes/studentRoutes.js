import * as studentController from '../controller/studentController.js';
import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/all', studentController.fetchAllstudent);

export default studentRoutes;
