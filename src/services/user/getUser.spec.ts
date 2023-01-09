import { expect, describe, it, beforeEach } from "vitest"
import User from "../../models/User"
import authenticateUser from "./authenticateUser"
import GetUser from "./getUser"
import registerUser from "./registerUser"

describe("teste de functionalidades relacionadas get user", () => {
    beforeEach(async () => {
        await User.sync({ force: true})
    })

    it("deve retornar usuario se existir", async () => {
        const userCreated = await registerUser({
            name: "teste",
            email: "teste@teste.com",
            password: "123456"
        })

        const user = await GetUser({
            userId: (userCreated[0]?.id as string)
        })

        expect(user).toHaveProperty("id")
    })

    it("deve retornar error apos tentar achar usuario inexistente", async () => {
        try {
            const userCreated = await registerUser({
                name: "teste",
                email: "teste@teste.com",
                password: "123456"
            })

            const user = await GetUser({
                userId: "64326c79-1b33-40a1-875d-b17ed1fc2462"
            })
        } catch (error) {
            expect(error).toBe("user not found")
        }
    })
})