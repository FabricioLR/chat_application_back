import { hash } from "bcryptjs"

async function Hash(password: string){
    return await hash(password, 10)
}

export default Hash 