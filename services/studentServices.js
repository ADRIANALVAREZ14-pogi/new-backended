import * as studentModel from '../models/studentModel.js';

export const fetchAllstudent = async() => {
    const student = await studentModel.getAllstudent();
    return student;
};

export const createStudent = async(student) => {
    const studentId = await studentModel.insert(student);
    return studentId;
}