import { expect, describe, it, beforeEach } from "vitest"
import User from "../../models/User"
import authenticateUser from "./authenticateUser"
import registerUser from "./registerUser"

describe("teste de functionalidades relacionadas a user authenticate", () => {
    beforeEach(async () => {
        await User.sync({ force: true})
    })

    it("deve retornar usuario se a autenticacao ocorrer sem problemas", async () => {
        const userCreated = await registerUser({
            name: "teste",
            email: "teste@teste.com",
            password: "123456"
        })

        const user = await authenticateUser({
            email: "teste@teste.com",
            password: "123456"
        })

        expect(user[0]).toHaveProperty("id")
        expect(user[1]).not.toBeNull()
    })

    it("deve retornar error apos tentar se a authenticar com credenciais invalidas", async () => {
        try {
            const userCreated = await registerUser({
                name: "teste",
                email: "teste@teste.com",
                password: "123456"
            })

            const user = await authenticateUser({
                email: "teste@teste.com",
                password: "123456"
            })
        } catch (error) {
            expect(error).toBe("invalid email or password")
        }
    })
})