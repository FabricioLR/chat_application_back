import { describe, it, expect, beforeAll, beforeEach, afterAll, jest } from "@jest/globals"
import request from "supertest"
import app from "../../src/app"

import sequelize from "../../src/database"
import User from "../../src/models/User"
import Contact from "../../src/models/Contact"
import Message from "../../src/models/Message"

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
        await Message.destroy({ where: {}, force: true })
    })

    it("deve salvar mensagem quando enviada a um contato existente", async () => {
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

        const response4 = await request(app.server).post("/SaveMessage").send({
            contactId: response3.body.contact.id,
            message: "ola"
        }).set({
            token: response.body.token
        })

        console.log(response4.body)
        
        expect(response.statusCode).toBe(200)
        expect(response2.statusCode).toBe(200)
        expect(response3.statusCode).toBe(200)
        expect(response4.statusCode).toBe(200)
    })

    it("deve retornar todas as mensagens do usuario", async () => {
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

        const response4 = await request(app.server).post("/SaveMessage").send({
            contactId: response3.body.contact.id,
            message: "ola"
        }).set({
            token: response.body.token
        })

        const response6 = await request(app.server).get("/GetMessages").set({
            token: response.body.token
        })

        console.log(response6.body)
        
        expect(response.statusCode).toBe(200)
        expect(response2.statusCode).toBe(200)
        expect(response3.statusCode).toBe(200)
        expect(response4.statusCode).toBe(200)
        expect(response6.statusCode).toBe(200)
    }) 

    it("deve retornar nada apos atualizar status de uma mensagem", async () => {
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
            name: response2.body.user.name
        }).set({
            token: response.body.token
        })

        const response4 = await request(app.server).post("/SaveMessage").send({
            contactId: response3.body.contact.id,
            message: "ola"
        }).set({
            token: response2.body.token
        })

        const response5 = await request(app.server).post("/UpdateMessageStatus").send({
            contactId: response3.body.contact.id,
        }).set({
            token: response.body.token
        })

        console.log(response5.body)

        expect(response.statusCode).toBe(200)
        expect(response2.statusCode).toBe(200)
        expect(response3.statusCode).toBe(200)
        expect(response4.statusCode).toBe(200)
        expect(response5.statusCode).toBe(200)
    })*/
}) 