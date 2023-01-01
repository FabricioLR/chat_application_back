import User from "../../models/User";
import Token from "../security/createTokenSecurity";
import Compare from "../security/verifyPasswordSecurity";

type AuthenticateUserData = {
    password: string;
    email: string;
}

async function authenticateUser(data: AuthenticateUserData){
    try {
        if (data.email == "" || data.password == "") throw "credentials cant be empty"

        const user = await User.findOne({
            where: {
                email: data.email
            }
        })
        
        if (!user) throw "invalid email or password"

        if (!await Compare({ password: data.password, userPassword: user!.password })) throw "invalid email or password"

        const token = await Token({
            id: user.id
        })

        user.password = ""
        user.email = ""

        return [user, token]
    } catch (error) {
        throw error
    }
}

export default authenticateUser