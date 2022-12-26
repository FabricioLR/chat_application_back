import express from "express"
import cors from "cors"
import router from "./router"
import { Server } from "socket.io"
import http from "http"

class App{
    express: any
    public io: Server
    public server: http.Server

    constructor(){
        this.express = express()
        this.server = http.createServer(this.express)
        this.io = new Server(this.server)

        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
        this.express.use(cors())
    }
    routes(){
        this.express.use(router)
    }
}

export default new App()

