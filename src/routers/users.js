import  userServices  from "../services/user-services.js";

export const Users= async (req, res)=>{
    const usuarios = await userServices.getAllUsers()
    //console.log(usuarios)
    res.json(usuarios);
}
export const ContactosUser= async (req, res)=>{
    const {id}= req.body
    console.log(id)
    const contactos = await userServices.contactosUser(id)
    if(!contactos) {
        return res.json({mensaje: "no tiene contactos"})
    }else{
        //console.log(contactos.contactos)
        return res.send(contactos.contactos)
    }
}