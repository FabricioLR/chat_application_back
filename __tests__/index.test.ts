import { describe, it, expect, beforeAll, beforeEach, afterAll } from "@jest/globals"

import { io, Socket } from "socket.io-client"


describe("teste de funcoes relacionadas ao socket.io", () => {
    let client: Socket

    beforeAll(() => {
        client = io("ws://localhost:4000");
    })

    afterAll(() => {
        client.disconnect()
    })

    it("deve receber mensagem ao se conectar ao socket", (done) => {
        client.on("message", (message) => {
            console.log(message.content)
            expect(message.content).toContain("hello")
        })
    })
})
    
