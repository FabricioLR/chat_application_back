import User, { UserModel } from "../../models/User"
import Hash from "../security/hashPasswordSecurity"

type UpdateUserCredentialsData = {
    userId: string
    password: string
    name: string
}

async function updateUserCredentials(data: UpdateUserCredentialsData): Promise<UserModel>{
    try {
        if (!data.name && !data.password) throw "credentials must be provided"

        const beforeUser = await User.findOne({
            where: {
                id: data.userId
            }
        })

        const password = data.password ? await Hash(data.password) : beforeUser?.password
        const name = data.name ? data.name : beforeUser?.name

        const update = await User.update({
            name,
            password
        }, {
            where: {
                id: data.userId
            }
        })

        if (!update) throw "update failed"

        const user = await User.findOne({
            where: {
                id: data.userId
            },
            attributes: ["name", "profile_image", "id"]
        })

        if (!user) throw "user not found"

        return user
    } catch (error) {
        throw error
    }
}

export default updateUserCredentials