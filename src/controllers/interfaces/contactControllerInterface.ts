import { Request, Response } from "express"

export default interface ContactControllerInterface {
    AddContact(request: Request, response: Response): Promise<Response>
    GetContacts(request: Request, response: Response): Promise<Response>
}

