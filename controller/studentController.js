import * as studentService from '../services/studentServices.js';

export const fetchAllstudent = async(req, res) => {
    const student = await studentService.fetchAllstudent();
    res.status(200).json(student);
};