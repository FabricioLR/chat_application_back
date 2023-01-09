import User, { UserModel } from "../../models/User";
import Token from "../security/createTokenSecurity";
import Hash from "../security/hashPasswordSecurity";

type RegisterUserData = {
    name: string;
    password: string;
    email: string;
}

type RegisterUserResponse = [
    user: UserModel,
    token: string
]

async function registerUser(data: RegisterUserData): Promise<RegisterUserResponse>{
    try {
        if (data.email == "" || data.password == "" || data.name == "") throw "credentials cant be empty"

        const nameAlreadyRegistered = await User.findOne({
            where: {
                name: data.name
            }
        })

        const emailAlreadyRegistered = await User.findOne({
            where: {
                email: data.email
            }
        })

        if(nameAlreadyRegistered) throw "name already exists";

        if(emailAlreadyRegistered) throw "email already exists"

        if (data.password.length < 6) throw "password must be at least 6 characters"

        const password = await Hash(data.password)

        const user = await User.create({
            name: data.name,
            email: data.email,
            password
        })

        if (!user) throw "user could not be created"

        user.password = ""
        user.email = ""

        const token = await Token({
            id: user.id
        })

        return [user, token]
    } catch (error: any) {
        throw error
    }
}

export default registerUser