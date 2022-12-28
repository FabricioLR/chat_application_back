import { Request, Response } from "express";
import createContact from "../services/contact/createContact";
import GetContacts from "../services/contact/getContacts";

class ContactsController{
    async AddContact(request: Request, response: Response){
        const { id } = response.locals.user
        const { contactId } = request.body

        try{
            const contact = await createContact({
                userId: id,
                contactId
            })

            return response.status(200).send({ contact })
        } catch(error){
            return response.status(400).send({ error })
        }
    }
    async GetContacts(request: Request, response: Response){
        const { id } = response.locals.user

        try{
            const contacts = await GetContacts({
                userId: id
            })

            console.log(contacts)

            return response.status(200).send({ contacts })
        } catch(error){
            return response.status(400).send({ error })
        }
    }
}

export default new ContactsController()