import "dotenv/config"
import { sign, Secret } from "jsonwebtoken"

const SECRET = process.env.SECRET as Secret

type TokenData = {
    id: string | undefined
}

async function Token(data: TokenData){
    return sign({ id: data.id }, SECRET, { expiresIn: 86400 })
}

export default Token
