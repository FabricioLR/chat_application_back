import { describe, it, expect, beforeAll, beforeEach, afterAll, jest } from "@jest/globals"
import request from "supertest"
import app from "../../src/app"

import sequelize from "../../src/database"
import User from "../../src/models/User"
import Contact from "../../src/models/Contact"

describe("teste de funcoes relacionadas ao contact controller", () => {
    /* jest.setTimeout(60000)
    beforeAll(async () => {
        jest.setTimeout(60000)
        require("../../src/models/associations")
        await sequelize.sync({ force: true })
    })

    beforeEach(async () => {
        jest.setTimeout(60000)
        await User.destroy({ where: {}, force: true })
        await Contact.destroy({ where: {}, force: true })
    })

    it("deve retornar contato ao adicionar", async () => {
        jest.setTimeout(60000)
        const response = await request(app.server).post("/Register").send({
            name: "teste",
            email: "teste@teste.com",
            password: "teste"
        })

        const response2 = await request(app.server).post("/Register").send({
            name: "teste2",
            email: "teste2@teste.com",
            password: "teste2"
        })

        const response3 = await request(app.server).post("/AddContact").send({
            contactId: response2.body.user.id
        }).set({
            token: response.body.token
        })

        console.log(response3.body)
        
        expect(response.statusCode).toBe(200)
        expect(response2.statusCode).toBe(200)
        expect(response3.statusCode).toBe(200)
    }) 

    it("deve retornar contatos de um usuario", async () => {
        jest.setTimeout(600000)
        const response = await request(app.server).post("/Register").send({
            name: "teste",
            email: "teste@teste.com",
            password: "teste"
        })

        const response2 = await request(app.server).post("/Register").send({
            name: "teste2",
            email: "teste2@teste.com",
            password: "teste2"
        })

        const response3 = await request(app.server).post("/AddContact").send({
            contactId: response2.body.user.id
        }).set({
            token: response.body.token
        })

        const response4 = await request(app.server).get("/GetContacts").set({
            token: response.body.token
        })

        console.log(response4.body)
        
        expect(response.statusCode).toBe(200)
        expect(response2.statusCode).toBe(200)
        expect(response3.statusCode).toBe(200)
        expect(response4.statusCode).toBe(200)
    }) */
})