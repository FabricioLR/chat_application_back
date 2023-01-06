import { describe, it, expect, beforeAll, beforeEach, afterAll, jest } from "@jest/globals"
import request from "supertest"
import app from "../../src/app"
import path from "path"
import sequelize from "../../src/database"
import User from "../../src/models/User"

describe("teste de funcoes relacionadas ao user controller", () => {
    /* jest.setTimeout(60000)
    beforeAll(async () => {
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
    })

    it("deve retornar nada apos troca de imagem do usuarion", async () => {
        jest.setTimeout(60000)
        const response = await request(app.express).post("/Register").send({
            email: "teste@gmail.com",
            name: "tsete",
            password: "teste"
        })

        const response2 = await request(app.express).post("/ChangeUserImage").set({
            token: response.body.token
        }).attach("file", path.join(__dirname, "files/teste.png"))

        expect(response.statusCode).toBe(200)
        expect(response2.statusCode).toBe(200)
    })   */
})