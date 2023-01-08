import axios from "axios"
import User from "../../models/User"

type PushNotificationData = {
    name: string
    title: string
    body: string
}

//PushNotification({ name: "", title: "", body: ""})

async function PushNotification(data: PushNotificationData){
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
    } catch (error) {
        console.log(error)
    }
}

export default PushNotification