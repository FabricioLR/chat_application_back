import Message from "../../models/Message"
import User from "../../models/User"
import { or } from "sequelize"

type GetMessagesData = {
    userId: string
}

async function GetMessages(data: GetMessagesData) {
    try {
        const messages = await Message.findAll({
            where: or(
                {
                    toId: data.userId
                },
                {
                    fromId: data.userId
                }
            ),
            include: [
                {
                    model: User,
                    as: "to",
                    attributes: ["id", "name", "profile_image"]
                },
                {
                    model: User,
                    as: "from",
                    attributes: ["id", "name", "profile_image"]
                }
            ]
        })

        if (!messages) throw "get messages failed"

        return messages
    } catch (error) {
        throw error

    }
}

export default GetMessages