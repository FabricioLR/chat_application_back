import User from "../../models/User"

type GetUserData = {
    userId: string
}

async function GetUser(data: GetUserData) {
    try {
        const user = await User.findOne({
            where: {
                id: data.userId
            }
        })        

        if (!user) throw "user not found"

        return user
    } catch (error) {
        throw error
    }
}

export default GetUser