import express from "express"
import cors from "cors"
import router from "./router"

class App{
    express: any
    constructor(){
        this.express = express()

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

export default new App().express

