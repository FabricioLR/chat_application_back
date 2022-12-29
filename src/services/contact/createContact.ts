import Contact from "../../models/Contact"
import User from "../../models/User"
import { and, or } from "sequelize"

type CreateContactData = {
    userId: string
    name: string
}

async function createContact(data: CreateContactData){
    try {
        const user = await User.findOne({
            where: {
                name: data.name,
            }
        })

        if (!user) throw "user not found"

        if (user.id == data.userId) throw "cannot add yourself"

        const alreadyExist = await Contact.findOne({
            where: or(
                {
                    user1Id: data.userId,
                    user2Id: (user.id as string)
                },
                {
                    user1Id: (user.id as string),
                    user2Id: data.userId
                }
            )
        })  
    
        if (alreadyExist) throw "contact already exist" 
    
        const contactC = await Contact.create({
            user1Id: data.userId,
            user2Id: (user.id as string)
        })

        if (!contactC) throw "failed to create contact"

        const contact = await Contact.findOne({
            where: {
                id: contactC.id,
            },
            include: [
                {
                    model: User,
                    as: "user1",
                    attributes: ["id", "name", "profile_image"]
                    
                },
                {
                    model: User,
                    as: "user2",
                    attributes: ["id", "name", "profile_image"]
                }
            ]
        })

        return contact
    } catch (error) {
        throw error
    }
}

export default createContact