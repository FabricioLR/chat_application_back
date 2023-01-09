import { expect, describe, it, beforeEach } from "vitest"
import User from "../../models/User"
import registerUser from "./registerUser"
import updateProfileImage from "./updateProfileImage"
import updateUserCredentials from "./updateUserCredentials"

describe("teste de functionalidades relacionadas update user credentials", () => {
    beforeEach(async () => {
        await User.sync({ force: true})
    })

    it("deve retornar usuario apos update de credenciais", async () => {
        const userCreated = await registerUser({
            name: "teste",
            email: "teste@teste.com",
            password: "123456"
        })

        const user = await updateUserCredentials({
            userId: (userCreated[0]?.id as string),
            password: "testeNovo",
            name: "testeNovo"
        })

        expect(user).toHaveProperty("id")
        expect(user?.name).toBe("testeNovo")
    })

    it("deve retornar usuario apos update de uma das duas credenciais", async () => {
        const userCreated = await registerUser({
            name: "teste",
            email: "teste@teste.com",
            password: "123456"
        })

        const user = await updateUserCredentials({
            userId: (userCreated[0]?.id as string),
            password: "",
            name: "testeNovo"
        })

        expect(user).toHaveProperty("id")
        expect(user?.name).toBe("testeNovo")
    })

    it("deve retornar error apos tentar update sem nenhuma credencial", async () => {
        try {
            const userCreated = await registerUser({
                name: "teste",
                email: "teste@teste.com",
                password: "123456"
            })

            const user = await updateUserCredentials({
                userId: (userCreated[0]?.id as string),
                password: "",
                name: ""
            })
        } catch (error) {
            expect(error).toBe("credentials must be provided")
        }
    })
})