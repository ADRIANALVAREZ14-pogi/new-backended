import * as studentService from '../services/studentServices.js';

export const fetchAllstudent = async(req, res) => {
    const student = await studentService.fetchAllstudent();
    res.status(200).json(student);
};

export const createstudent = async(req, res) => {
    const {name, srcode, program} = req.body;
    const student = {name, srcode, program};

    try{
        const studentId = await studentService.createStudent(student);
        res.status(200).json({
            success: true,
            message: studentId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}

export const editStudent = async (req, res) =>{
    const {name, author} = req.body;
    const { id } = req.params;
    const student = {id, name, srcode, program};

    try{
        const updatedStudent = await studentService.updateStudentt(student);
        res.status(200).json({
            success: true,
            message: updatedStudent
        });    
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internet Server Error"
        });
    }
}

export const deleteStudent = async (req, res) =>{
    const { id } = req.params;

    try{
        const deletedStudent = await studentService.deleteStudent(parseInt(id));
        res.status(200).json({ 
            success: true,
            message: deletedStudent
        });    
    }catch(e){
        console.log(e);
        res.status(500).json({
            error: "Internet Server Error"
        });
    }
}