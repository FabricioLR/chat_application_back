import { describe, it, expect, beforeAll, beforeEach, afterAll, jest } from "@jest/globals"
import request from "supertest"
import app from "../../src/app"

import { io, Socket } from "socket.io-client"
import sequelize from "../../src/database"
import User from "../../src/models/User"
import Contact from "../../src/models/Contact"


/*describe("teste de funcoes relacionadas ao socket.io", () => {
    let client: Socket

    beforeAll(() => {
        client = io("ws://localhost:4000");
    })

    afterAll(() => {
        client.disconnect()
    })

    it("deve receber mensagem ao se conectar ao socket", (done) => {
        client.on("message", (message) => {
            console.log(message.content)
            expect(message.content).toContain("hello")
        })
    })
}) */

describe("teste de funcoes relacionadas ao user controller", () => {
    /* beforeAll(async () => {
        jest.setTimeout(60000)
        require("../../src/models/associations")
        await sequelize.sync({ force: true })
    })

    beforeEach(async () => {
        jest.setTimeout(60000)
        await User.destroy({ where: {}, force: true })
    })

    it("deve retornar usuario e token apos registrar", async () => {
        jest.setTimeout(60000)
        const response = await request(app.server).post("/Register").send({
            name: "teste",
            email: "teste@teste.com",
            password: "teste"
        })

        console.log(response.body)
        
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty("user")
        expect(response.body).toHaveProperty("token")
    }) 

    it("deve retornar usuario e token apos autenticar", async () => {
        jest.setTimeout(60000)
        const response = await request(app.server).post("/Register").send({
            name: "teste",
            email: "teste@teste.com",
            password: "teste"
        })

        const response2 = await request(app.server).post("/Authenticate").send({
            email: "teste@teste.com",
            password: "teste"
        })

        console.log(response2.body)
        
        expect(response2.statusCode).toBe(200)
        expect(response2.body).toHaveProperty("user")
        expect(response2.body).toHaveProperty("token")
    })  */
})