import User from "../../models/User"

type UpdateProdileImageData = {
    url: string
    userId: string
}

async function updateProfileImage(data: UpdateProdileImageData){
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

        return user
    } catch (error) {
        throw error
    }
}

export default updateProfileImage