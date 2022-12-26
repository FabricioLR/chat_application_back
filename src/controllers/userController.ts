import { Request, Response } from "express"
import authenticateUser from "../services/user/authenticateUser";
import registerUser from "../services/user/registerUser";

class UserController{
    async Register(request: Request, response: Response){
        const { name, email, password } = request.body;
        
        try {
            const [user, token] = await registerUser({
                email, name, password
            })

            return response.status(200).send({ token, user })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
    async Authenticate(request: Request, response: Response){
        const { email, password } = request.body;

        try {
            const [user, token] = await authenticateUser({
                email, password
            })

            return response.status(200).send({ token, user })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
}

export default new UserController()
