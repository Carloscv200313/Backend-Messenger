import express from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import {Socket} from './Socket.js';
import { Server as SocketServer } from 'socket.io';
import { router } from '../controllers/index-controller.js';
export class Server{
    constructor(){
        this.app = express()
        this.server = http.createServer(this.app)
        this.port=process.env.PORT
        this.io = new SocketServer(this.server, {
            //connectionStateRecovery: {},
            cors: {
                origin: 'http://localhost:3000'
            }
        });
    }
    middelware(){
        const corsOptions = {
            origin: 'http://localhost:3000'
        }
        this.app.use(cors(corsOptions));
        this.app.use(morgan('dev'));
        this.app.use(express.json()); 
        this.app.use(express.urlencoded({ extended: true })); 
        this.app.use(router)
    }
    execute(){
        this.middelware()
        this.configSocket()
        this.server.listen(this.port, () => {
            console.log("server corriendo en el puerto " + this.port)
        })
    }
    configSocket(){
        return new Socket(this.io)
    }
}