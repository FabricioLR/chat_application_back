import { expect, describe, it, beforeEach } from "vitest"
import User from "../../models/User"
import registerUser from "./registerUser"
import RemoveToken from "./removeToken"

describe("teste de functionalidades relacionadas remove token", () => {
    beforeEach(async () => {
        await User.sync({ force: true})
    })

    it("deve retornar nada apos remover token em um usuario", async () => {
        const userCreated = await registerUser({
            name: "teste",
            email: "teste@teste.com",
            password: "123456"
        })

        const user = await RemoveToken({
            userId: (userCreated[0]?.id as string)
        })

        expect(user).toBeUndefined()
    })

    it("deve retornar error apos tentar remover token invalido", async () => {
        try {
            const userCreated = await registerUser({
                name: "teste",
                email: "teste@teste.com",
                password: "123456"
            })

            const user = await RemoveToken({
                userId: "64326c79-1b33-40a1-875d-b17ed1fc2462"
            })
        } catch (error) {
            expect(error).toBe("update failed")
        }
    })
})