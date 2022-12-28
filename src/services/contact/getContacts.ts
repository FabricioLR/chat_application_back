import Contact from "../../models/Contact";
import User from "../../models/User";

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
            where: {
                userId: data.userId
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
        
        return contacts
    } catch (error) {
        throw "get contacts error"
    }
}

export default GetContacts