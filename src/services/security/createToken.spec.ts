import { expect, describe, it } from "vitest"
import Token from "./createTokenSecurity"

describe("teste de functionalidades relacionadas a user authenticate", () => {
    it("deve retornar usuario se a autenticacao ocorrer sem problemas", async () => {
        const token = await Token({
            id: "açsldkfjaslkçdjflksajdf"
        })

        expect(token.split(".").length).toBe(3)
    })
})