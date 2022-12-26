import "dotenv/config"
import { sign, Secret } from "jsonwebtoken"

const SECRET = process.env.SECRET as Secret

async function Token(id: string | undefined) {
    return sign({ id }, SECRET, { expiresIn: 86400 })
}

export default Token
