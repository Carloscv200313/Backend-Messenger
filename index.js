import express from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import { Server as SocketServer } from 'socket.io';
import { MongoClient } from 'mongodb';

const client = await MongoClient.connect(
    'mongodb+srv://myProyecto:Sebastian200313.@cluster0.1kc2h.mongodb.net/'
);

const corsOptions = {
    origin: 'http://localhost:3000'
};

const app = express();
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json()); // 🔹 Esta línea soluciona el problema con req.body vacío
app.use(express.urlencoded({ extended: true })); // 🔹 Permite datos en x-www-form-urlencoded

const server = http.createServer(app);

const io = new SocketServer(server, {
    connectionStateRecovery: {},
    cors: {
        origin: 'http://localhost:3000'
    }
});

const coll = client.db('Mensajes').collection('usuarios');
const result = await coll.find({}).toArray();

io.on('connection', socket => {
    console.log('Client connected');
});

app.get('/usuarios', (req, res) => {
    res.json(result);
});

app.post('/login', (req, res) => {
    const datos = req.body;
    console.log('Datos recibidos:', datos); // 🔹 Ahora debería mostrar correctamente los datos enviados
    res.json({ message: 'Login recibido', datos });
});

server.listen(4000, () => {
    console.log('Server on port', 4000)
});
