import * as userService from "../services/userService.js";

export const createAccount = async (req, res) => {
    const { name, email, password } = req.body;
    const user = { name, email, password };

    try{
        const result = await userService.createAccount(user);
        res.status(200).json({
            success: true,
            message: result
        });
    } catch (error){
        console.log(error);
        res.status(error.statusCode || 500).json({
            error: `${error.message || "Internal Server Error"}`
        });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = { email, password };

    try{
        const result = await userService.login(user);
        res.status(200).json({
            success: true,
            message: result
        });
    } catch (error){
        console.log(error);
        res.status(error.statusCode || 500).json({
            error: `${error.message || "Internal Server Error"}`
        });
    }

}