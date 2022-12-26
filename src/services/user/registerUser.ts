import User from "../../models/User";
import Token from "../security/createTokenSecurity";
import Hash from "../security/hashPasswordSecurity";

type RegisterUserData = {
    name: string;
    password: string;
    email: string;
}

async function registerUser(data: RegisterUserData){
    try {
        const alreadyRegistered = await User.findOne({
            where: {
                email: data.email
            }
        })

        if(alreadyRegistered) throw "user already exists"

        const password = await Hash(data.password)

        const user = await User.create({
            name: data.name,
            email: data.email,
            password,
            profile_image: ""
        })

        if (!user) throw "user could not be created"

        user.password = ""
        user.email = ""

        const token = await Token(user.id)

        return [user, token]
    } catch (error) {
        throw "registration failed"
    }
}

export default registerUser