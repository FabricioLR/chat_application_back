import { expect, describe, it, beforeEach } from "vitest"
import User from "../../models/User"
import registerUser from "../user/registerUser"
import SetToken from "../user/setToken"
import PushNotification from "./pushNotification"

describe("teste de funcoes relactionadas a push notification", () => {
    beforeEach(async () => {
        await User.sync({ force: true})
    })

    it("deve retornar status ao enviar notificacao", async () => {
        const userCreated = await registerUser({
            name: "teste",
            email: "teste@teste.com",
            password: "123456"
        })

        const user = await SetToken({
            userId: (userCreated[0]?.id as string),
            token: "ExponentPushToken[asçldfkjhasldfkj]"
        })

        const notification = await PushNotification({
            title: "teste",
            body: "teste",
            name: "teste"
        })

        expect(notification.data).toHaveProperty("status")
    })
    it("deve retornar error se o usuario nao for encontrado", async () => {
        try {
            const notification = await PushNotification({
                title: "teste",
                body: "teste",
                name: "nao existe"
            })
        } catch (error) {
            expect(error).toBe("user not found")
        }
    })
})