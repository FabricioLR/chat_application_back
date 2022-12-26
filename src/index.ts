import "dotenv/config"
const PORT = process.env.PORT || 4000

import app from "./app"

app.io.on("connection", socket => {
    console.log(socket.id)

    socket.send({
        type: "message",
        content: "hello"
    })

    socket.on("disconnect", () => {
        console.log("disconnected")
    })

})

app.server.listen(PORT, () => console.log("Server running on port " + PORT))
