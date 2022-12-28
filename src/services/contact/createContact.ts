import Contact from "../../models/Contact"
import User from "../../models/User"
import { and } from "sequelize"

type CreateContactData = {
    userId: string
    name: string
}

async function createContact(data: CreateContactData){
    try {
        const userContact = await User.findOne({
            where: {
                name: data.name,
            }
        })

        if (!userContact) throw "user not found"

        if (userContact.id == data.userId) throw "cannot add yourself"

        const alreadyExist = await Contact.findOne({
            where: and(
                { userId: data.userId },
                { contactId: userContact.id }
            )
        })
    
        if (alreadyExist) throw "contact already exist" 
    
        const contacts = await Contact.bulkCreate([ 
            {
                userId: data.userId,
                contactId: (userContact.id as string)
            },
            {
                userId: (userContact.id as string),
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
        throw error
    }
}

export default createContact