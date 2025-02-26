import { MongoClient } from "mongodb";
class Database {
    constructor() {
        this.client = null;
        this.db = null;
    }
    async connect() {
        if (!this.client) {
            this.client = new MongoClient(
                "mongodb+srv://myProyecto:Sebastian200313.@cluster0.1kc2h.mongodb.net/"
            );
            await this.client.connect();
            console.log("Conectado a MongoDB");
        }
        this.db = this.client.db("Mensajes");
        return this.db;
    }
    getCollection(name) {
        if (!this.db) throw new Error("La base de datos no está conectada");
        return this.db.collection(name);
    }
}

export default new Database();
