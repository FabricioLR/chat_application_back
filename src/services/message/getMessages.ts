import Message from "../../models/Message"
import User from "../../models/User"

type GetMessagesData = {
    userId: string
}

async function GetMessages(data: GetMessagesData) {
    try {
        const myMessages = await Message.findAll({
            where: {
                fromId: data.userId
            },
            include: [
                {
                    model: User,
                    as: "to"
                },
                {
                    model: User,
                    as: "from"
                }
            ]
        })

        const messagesForMe = await Message.findAll({
            where: {
                toId: data.userId
            },
            include: [
                {
                    model: User,
                    as: "to"
                },
                {
                    model: User,
                    as: "from"
                }
            ]
        })

        if (!myMessages || !messagesForMe) throw "get messages failed"

        return [myMessages, messagesForMe]
    } catch (error) {
        console.log(error)
        throw "get messages failed"

    }
}

export default GetMessages