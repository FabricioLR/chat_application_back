import { Request, Response } from "express";

export default interface UserControllerInterface {
    Register(request: Request, response: Response): Promise<Response>
    Authenticate(request: Request, response: Response): Promise<Response>
    AuthenticateByToken(request: Request, response: Response): Promise<Response>
    ChangeUserImage(request: Request, response: Response): Promise<Response>
    ChangeUserCredential(request: Request, response: Response): Promise<Response>
    SetToken(request: Request, response: Response): Promise<Response>
    RemoveToken(request: Request, response: Response): Promise<Response>
}