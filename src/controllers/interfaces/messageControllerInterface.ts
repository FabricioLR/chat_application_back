import { Request, Response } from "express";

export default interface MessageControllerInterface {
    SaveMessage(request: Request, response: Response): Promise<Response>
    GetMessages(request: Request, response: Response): Promise<Response>
    UpdateMessageStatus(request: Request, response: Response): Promise<Response>
}