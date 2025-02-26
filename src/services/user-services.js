import Database from "../config/conexion.js";
import { ObjectId } from "mongodb";
class UserService {
    async getAllUsers() {
        const db = await Database.connect();
        return await db.collection("usuarios").find({}).toArray();
    }
    async loginUser(user, password) {
        const db = await Database.connect();
        return await db.collection("usuarios").findOne({user: user, password: password})   
    }
    async contactosUser(idUser) {
        const db = await Database.connect();
    
        return await db.collection("usuarios").findOne(
            { _id: new ObjectId(idUser) }, // ✅ Convertir idUser a ObjectId
            { projection: { _id: 0, contactos: 1 } } // ✅ Usar projection correctamente
        );
    }
    
}
export default new UserService();
