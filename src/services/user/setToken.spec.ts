import { expect, describe, it, beforeEach } from "vitest"
import User from "../../models/User"
import registerUser from "./registerUser"
import SetToken from "./setToken"

describe("teste de functionalidades relacionadas set token", () => {
    beforeEach(async () => {
        await User.sync({ force: true})
    })

    it("deve retornar nada apos setar token em um usuario", async () => {
        const userCreated = await registerUser({
            name: "teste",
            email: "teste@teste.com",
            password: "123456"
        })

        const user = await SetToken({
            userId: (userCreated[0]?.id as string),
            token: "ExponentPushToken[asçldfkjhasldfkj]"
        })

        expect(user).toBeUndefined()
    })

    it("deve retornar error apos tentar setar token invalido", async () => {
        try {
            const userCreated = await registerUser({
                name: "teste",
                email: "teste@teste.com",
                password: "123456"
            })

            const user = await SetToken({
                userId: (userCreated[0]?.id as string),
                token: "ExpoushToken[asçldfkjhasldfkj]"
            })
        } catch (error) {
            expect(error).toBe("invalid expo token")
        }
    })
})