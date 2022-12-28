import { Request, Response } from "express";

class MessageController{
    async SaveMessage(request: Request, response: Response){
        const { id } = response.locals.User
        const { message, contactId } = request.body

        try {
            console.log(contactId, id, message)

            return response.status(200).send
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
    async GetMessages(request: Request, response: Response){
        try {
            
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
}

export default new MessageController()