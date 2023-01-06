import { and, or, where } from "sequelize"
import Contact from "../../models/Contact"
import Message from "../../models/Message"

type UpdateMessageStatusData = {
    userId: string
    contactId: string
}

async function UpdateMessageStatus(data: UpdateMessageStatusData){
    try {
        const contact = await Contact.findOne({
            where: and(
                {
                    id: data.contactId
                },
                or(
                    {
                        user1Id: data.userId
                    },
                    {
                        user2Id: data.userId
                    }
                )
            )
        })

        if (!contact) throw "contact not found"

        const update = await Message.update(
            {
                viewed: true
            },
            {
                where: and(
                    {
                        contactId: data.contactId
                    },
                    {
                        toId: data.userId
                    }
                ), 
            }
        )

        if (!update) throw "update failed"
        
    } catch (error) {
        throw error
    }
}

export default UpdateMessageStatus