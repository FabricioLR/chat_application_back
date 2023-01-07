import User from "../../models/User"

type SetTokenData = {
    userId: string
    token: string
}

async function SetToken(data: SetTokenData){
    try {
        if (!data.token.includes("ExponentPushToken")) throw "invalid expo token"

        const update = await User.update({
            token: data.token
        }, {
            where: {
                id: data.userId
            }
        })

        if (!update) throw "update failed"
    } catch (error) {
        throw error
    }
}

export default SetToken