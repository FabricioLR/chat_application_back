import "dotenv/config"
const PORT = process.env.PORT || 4000

import app from "./app"

type UserData = {
    [key: string]: string
}

const users: UserData = {}

app.io.on("connection", (socket) => {
    socket.removeAllListeners()
    socket.on("whoami", (name: string) => {
        users[name] = socket.id
        app.io.sockets.emit("server onlines", users)
        console.log("connection", users)
    })

    socket.on("disconnect", () => {
        const user = Object.keys(users).filter(name => users[name] == socket.id)
        delete users[user[0]]
        app.io.sockets.emit("server onlines", users)
        console.log("disconnection", users)
    })

    socket.on("message", (data) => {
        console.log("message", users)
        if (users[data.to]){
            socket.to(users[data.to]).emit("server message", data)
        }
    })

    socket.on("updateMessageStatus", (data) => {
        console.log(data)
        socket.to(users[data.to]).emit("server updateMessageStatus", data)
    })
})

app.server.listen(PORT, () => console.log("Server running on port " + PORT))
