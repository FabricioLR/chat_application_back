import { expect, describe, it, beforeEach } from "vitest"
import User from "../../models/User"
import registerUser from "./registerUser"

describe("teste de funcionalidades relacionadas a user register", () => {
    beforeEach(async () => {
        await User.sync({ force: true})
    })

    it("deve retornar usuario criado", async () => {
        const user = await registerUser({
            email: "teste@teste.com",
            name: "teste",
            password: "123456"
        })

        expect(user[0]).toHaveProperty("id")
        expect(user[1]).not.toBeNull()
    })

    it("deve retornar error ao tentar criar usuario com senha menor que 6 catacteres", async () => {
        try {
            await registerUser({
                email: "teste@teste.com",
                name: "teste",
                password: "12345"
            })
        } catch (error) {
            expect(error).toBe("password must be at least 6 characters")
        }
    })
})
