import { Request, Response } from "express";
import GetMessages from "../services/message/getMessages";
import SaveMessage from "../services/message/saveMessage";
import UpdateMessageStatus from "../services/message/updateMessageStatus";

class MessageController{
    async SaveMessage(request: Request, response: Response){
        const { id } = response.locals.user
        const { message, contactId } = request.body

        try {
            const message_ = await SaveMessage({
                userId: id,
                contactId,
                message
            })

            return response.status(200).send({ message: message_ })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
    async GetMessages(request: Request, response: Response){
        const { id } = response.locals.user

        try {
            const messages = await GetMessages({
                userId: id
                
            })

            return response.status(200).send({ messages })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
    async UpdateMessageStatus(request: Request, response: Response){
        const { id } = response.locals.user
        const { contactId } = request.body

        try {
            await UpdateMessageStatus({
                userId: id,
                contactId
            })

            return response.status(200).send()
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
}

export default new MessageController()