import Contact from "../../models/Contact"
import Message from "../../models/Message"

type SaveMessageData = {
    userId: string
    contactId: string
    message: string
}

async function SaveMessage(data: SaveMessageData){
    try {
        const contact = await Contact.findOne({
            where: {
                id: data.contactId
            }
        })

        if (!contact) throw "contact not found"

        if (data.userId != contact.user1Id && data.userId != contact.user2Id) throw "you cant save this message"

        const messageC = await Message.create({
            fromId: data.userId,
            toId: contact.user1Id == data.userId ? contact.user2Id : contact.user1Id,
            message: data.message,
            contactId: data.contactId
        })

        if (!messageC) throw "save message failed"

        const message = await Message.findOne({
            where: {
                id: messageC.id
            }
        })

        return message
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default SaveMessage