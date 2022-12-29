import Contact from "../../models/Contact";
import User from "../../models/User";
import { or } from "sequelize"

type GetContactsData = {
    userId: string
}

async function GetContacts(data: GetContactsData){
    try {
        const user = await User.findOne({
            where: {
                id: data.userId
            }
        })

        if (!user) throw "user not found"

        const contacts = await Contact.findAll({
            where: or(
                {
                    user1Id: data.userId
                },
                {
                    user2Id: data.userId
                }
            ),
            include: [
                {
                    model: User,
                    as: "user1"
                },
                {
                    model: User,
                    as: "user2"
                }
            ]
        })
        
        return contacts
    } catch (error) {
        throw error
    }
}

export default GetContacts