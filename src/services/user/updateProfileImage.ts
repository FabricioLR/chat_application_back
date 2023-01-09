import User, { UserModel } from "../../models/User"

type UpdateProdileImageData = {
    url: string
    userId: string
}

async function updateProfileImage(data: UpdateProdileImageData): Promise<UserModel>{
    try {
        const update = await User.update({
            profile_image: data.url
        }, {
            where: {
                id: data.userId
            }
        })

        if (!update) throw "update error"

        const user = await User.findOne({
            where: {
                id: data.userId
            },
            attributes: ["name", "id", "profile_image"]
        })

        if (!user) throw "user not found"

        return user
    } catch (error) {
        throw error
    }
}

export default updateProfileImage