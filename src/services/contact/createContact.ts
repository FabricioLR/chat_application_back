import Contact from "../../models/Contact"
import User from "../../models/User"
import { and } from "sequelize"

type CreateContactData = {
    userId: string
    publicId: string
    contactId: string
}

async function createContact(data: CreateContactData){
    try {
        const userContact = await User.findOne({
            where: {
                publicId: data.contactId,
            }
        })

        if (!userContact) throw "user not found"

        const alreadyExist = await Contact.findOne({
            where: and(
                { userId: data.userId },
                { publicId: data.contactId }
            )
        })
    
        if (alreadyExist) throw "contact already exist" 
    
        const contacts = await Contact.bulkCreate([ 
            {
                userId: data.userId,
                publicId: data.contactId
            },
            {
                userId: (userContact.id as string),
                publicId: data.publicId
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
                    as: "public"
                }
            ]
        })

        return contact
    } catch (error) {
        throw "create contact failed"
    }
}

export default createContact