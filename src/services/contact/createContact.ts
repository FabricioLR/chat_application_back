import Contact from "../../models/Contact"
import User from "../../models/User"
import { and } from "sequelize"

type CreateContactData = {
    userId: string
    contactId: string
}

async function createContact(data: CreateContactData){
    try {
        const userContact = await User.findOne({
            where: {
                id: data.contactId,
            }
        })

        if (!userContact) throw "user not found"

        const alreadyExist = await Contact.findOne({
            where: and(
                { userId: data.userId },
                { contactId: data.contactId }
            )
        })
    
        if (alreadyExist) throw "contact already exist" 
    
        const contacts = await Contact.bulkCreate([ 
            {
                userId: data.userId,
                contactId: data.contactId
            },
            {
                userId: data.contactId,
                contactId: data.userId
            }
        ])

        if (!contacts) throw "failed to create contact"

        const contact = await Contact.findOne({
            where: {
                id: contacts[0].id,
            },
            include: [
                {
                    model: User,
                    as: "user"
                },
                {
                    model: User,
                    as: "contact"
                }
            ]
        })

        return contact
    } catch (error) {
        console.log(error)
        throw "create contact failed"
    }
}

export default createContact