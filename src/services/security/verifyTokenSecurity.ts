import "dotenv/config"
import { Request, Response, NextFunction} from "express"
import { verify, Secret } from "jsonwebtoken"

const verifyToken = (request: Request, response: Response, next: NextFunction) => {
    try {
        const token = request.headers.token as string
        const SECRET = process.env.SECRET as Secret

        if (token === null || token === undefined || token === "" || token === "null"){
            return response.status(400).send({ error: "token must be provided"})
        }

        verify(token, SECRET, (err, decoded) => {
            if (err) return response.status(400).send({ error: "token invalid" })

            response.locals.id = decoded
            return next()
        })

    } catch (error) {
        return response.status(400).send({ error: "validation token error" })
    }
}

export default verifyToken