import { expect, describe, it, beforeEach } from "vitest"
import User from "../../models/User"
import registerUser from "./registerUser"
import updateProfileImage from "./updateProfileImage"

describe("teste de functionalidades relacionadas update profile image", () => {
    beforeEach(async () => {
        await User.sync({ force: true})
    })

    it("deve retornar usuario apos update de imagem url", async () => {
        const userCreated = await registerUser({
            name: "teste",
            email: "teste@teste.com",
            password: "123456"
        })

        const user = await updateProfileImage({
            userId: (userCreated[0]?.id as string),
            url: "https://teste.com/teste"
        })

        expect(user).toHaveProperty("id")
        expect(user?.profile_image).toBe("https://teste.com/teste")
    })
})