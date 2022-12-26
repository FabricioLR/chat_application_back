import User from "../../models/User";
import Token from "../security/createTokenSecurity";
import Compare from "../security/verifyPasswordSecurity";

type AuthenticateUserData = {
    password: string;
    email: string;
}

async function authenticateUser(data: AuthenticateUserData){
    try {
        const user = await User.findOne({
            where: {
                email: data.email
            },
            
        })

        console.log(user)

        if (!await Compare({ password: data.password, userPassword: user!.password }) || !user) throw "invalid email or password"

        const token = await Token(user.id)

        user.password = ""
        user.email = ""

        return [user, token]
    } catch (error) {
        throw "authentication failed"
    }
}

export default authenticateUser