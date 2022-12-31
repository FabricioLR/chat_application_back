import firebase from "firebase-admin"
import * as Config from "../../config/FirebaseConfig.json"

const Bucket = "chat-application-5fabe.appspot.com"
const serviceAccount = Config as firebase.ServiceAccount

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount as any),
    storageBucket: Bucket
})

const storage = firebase.storage().bucket()

export default storage