import axios, { AxiosResponse } from "axios"
import User from "../../models/User"

type PushNotificationData = {
    name: string
    title: string
    body: string
}
type PushNotificationResponse = {
    data: {
        status: string
        id: string
    }
}

//PushNotification({ name: "Samuel", title: "new message from fabricio", body: "fabricio - estou de olho em voces"})

async function PushNotification(data: PushNotificationData): Promise<PushNotificationResponse> {
    try {
        if (data.name == "") throw "user name cant be empty"
        
        const user = await User.findOne({
            where: {
                name: data.name
            },
            attributes: ["token"]
        })

        if (!user) throw "user not found"

        if (!user?.token) throw "user without token"

        const response = await axios({
            method: 'post',
            url: 'https://exp.host/--/api/v2/push/send',
            data: {
                to: user?.token,
                title: data.title,
                body: data.body
            }
        })

        console.log("notification", response.data)

        if (response.status != 200) throw "send notification failed"

        return response.data
    } catch (error: any) {
        return error
    }
}

export default PushNotification