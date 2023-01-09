import "dotenv/config"
import { sign, Secret } from "jsonwebtoken"

const SECRET = process.env.SECRET as Secret

type TokenData = {
    id: string | undefined
}

function Token(data: TokenData): string{
    return sign({ id: data.id }, SECRET, { expiresIn: 86400 })
}

export default Token
