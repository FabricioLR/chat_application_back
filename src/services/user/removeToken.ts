import User from "../../models/User"

type RemoveTokenData = {
    userId: string
}

async function RemoveToken(data: RemoveTokenData): Promise<void>{
    try {
        const update = await User.update({
            token: null
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

export default RemoveToken