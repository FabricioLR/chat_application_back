import "dotenv/config"
const PORT = process.env.PORT || 4000

import app from "./app"

type UserData = {
    [key: string]: string
}

const users: UserData = {}

app.io.on("connection", (socket) => {
    socket.on("whoami", (name: string) => {
        if (name){
            users[name] = socket.id
        }
    })

    socket.on("disconnect", () => {
        const user = Object.keys(users).filter(name => users[name] == socket.id)
        delete users[user[0]]
    })

    socket.on("message", (data) => {
        if (users[data.to]){
            socket.to(users[data.to]).emit("contact message", data)
        }
    })
})

app.server.listen(PORT, () => console.log("Server running on port " + PORT))
