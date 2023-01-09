import { expect, describe, it } from "vitest"
import Hash from "./hashPasswordSecurity"
import Compare from "./verifyPasswordSecurity"

describe("teste de functionalidade relacionadas verify password", () => {
    it("deve retornar true se o password for igual ao hash", async () => {
        const password = "123456"
        const hash = await Hash(password)

        const verify = await Compare({
            password: "123456",
            userPassword: hash
        })

        expect(verify).toBeTruthy()
    })
})