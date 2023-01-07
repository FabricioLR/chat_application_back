import { Request, Response } from "express"
import authenticateUser from "../services/user/authenticateUser";
import GetUser from "../services/user/getUser";
import registerUser from "../services/user/registerUser";
import SetToken from "../services/user/setToken";
import updateProfileImage from "../services/user/updateProfileImage";
import updateUserCredentials from "../services/user/updateUserCredentials";

class UserController{
    async Register(request: Request, response: Response){
        const { name, email, password } = request.body
        
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
        const { email, password } = request.body

        try {
            const [user, token] = await authenticateUser({
                email, password
            })

            return response.status(200).send({ token, user })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
    async AuthenticateByToken(request: Request, response: Response){
        const { id } = response.locals.user

        try {
            const user = await GetUser({
                userId: id
            })

            return response.status(200).send({ user })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
    async ChangeUserImage(request: Request, response: Response){
        const { id } = response.locals.user
        const { url } = response.locals.file

        try {
            const user = await updateProfileImage({
                userId: id, url
            })

            return response.status(200).send({ user })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
    async ChangeUserCredential(request: Request, response: Response){
        const { id } = response.locals.user
        const { name, password } = request.body

        try {
            const user = await updateUserCredentials({
                userId: id, name, password
            })

            return response.status(200).send({ user })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
    async SetToken(request: Request, response: Response){
        const { id } = response.locals.user
        const { token } = request.body

        try {
            await SetToken({
                userId: id, token
            })

            return response.status(200).send()
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
}

export default new UserController()
