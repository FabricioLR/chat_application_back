import { Request, Response } from "express";
import createContact from "../services/contact/createContact";
import GetContacts from "../services/contact/getContacts";
import ContactControllerInterface from "./interfaces/contactControllerInterface";

class ContactController implements ContactControllerInterface{
    async AddContact(request: Request, response: Response): Promise<Response>{
        const { id } = response.locals.user
        const { name } = request.body

        try{
            const contact = await createContact({
                userId: id,
                name
            })

            return response.status(200).send({ contact })
        } catch(error){
            return response.status(400).send({ error })
        }
    }
    async GetContacts(request: Request, response: Response): Promise<Response>{
        const { id } = response.locals.user

        try{
            const contacts = await GetContacts({
                userId: id
            })

            return response.status(200).send({ contacts })
        } catch(error){
            return response.status(400).send({ error })
        }
    }
}

export default new ContactController()