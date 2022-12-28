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

        const messageC = await Message.create({
            fromId: data.userId,
            toId: contact.contactId,
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