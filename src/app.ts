import express from "express"
import cors from "cors"
import router from "./router"
import { Server } from "socket.io"
import http from "http"
import sequelize from "./database"

class App{
    express: express.Application
    public io: Server
    public server: http.Server

    constructor(){
        this.express = express()
        this.server = http.createServer(this.express)
        this.io = new Server(this.server, { 
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        })

        this.middlewares()
        this.routes()
        this.connection()
    }
    middlewares(){
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
        this.express.use(cors())
    }
    routes(){
        this.express.use(router)
    }
    async connection(){
        require("./models/associations")
        await sequelize.sync({})
    }
}

export default new App()

