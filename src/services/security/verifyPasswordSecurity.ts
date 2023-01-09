import { compare } from "bcryptjs"

type CompareData = {
    password: string
    userPassword: string | undefined
}

async function Compare(data: CompareData): Promise<boolean>{
    const userPassword = data.userPassword as string

    if (!await compare(data.password, userPassword)) return false

    return true
}

export default Compare
