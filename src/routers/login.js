import userServices from "../services/user-services.js";

export const Login = async (req, res) => {
    const { user, password } = req.body;
    const usuarios = await userServices.loginUser(user, password)
    if (!usuarios) {
        return res.json({ message: 'usuario no encontrado' });
    }
    return res.json(usuarios)
}