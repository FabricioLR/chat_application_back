import { expect, describe, it } from "vitest"
import Hash from "./hashPasswordSecurity"

describe("teste de functionalidade relacionadas hash password", () => {
    it("deve retornar hash password", async () => {
        const password = "123456"
        const hash = await Hash(password)

        expect(hash).not.toBeNull()
    })
})