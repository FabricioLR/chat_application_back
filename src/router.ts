import { Router } from "express"
import multer from "multer"
import UserController from "./controllers/userController"
import contactController from "./controllers/contactController"

import verifyToken from "./services/security/verifyTokenSecurity"
import messageController from "./controllers/messageController"
import UploadImage from "./services/firebase/images"

const Multer = multer({
    storage: multer.memoryStorage(),
    limits:{
        fieldSize: 100000
    }
})
const router: Router = Router()

router.post("/Register", UserController.Register)
router.post("/Authenticate", UserController.Authenticate)
router.get("/AuthenticateByToken", verifyToken, UserController.AuthenticateByToken)
router.post("/ChangeUserImage", verifyToken, Multer.single("file"), UploadImage, UserController.ChangeUserImage)
router.post("/ChangeUserCredentials", verifyToken, UserController.ChangeUserCredential)

router.post("/AddContact", verifyToken, contactController.AddContact)
router.get("/GetContacts", verifyToken, contactController.GetContacts)

router.post("/SaveMessage", verifyToken, messageController.SaveMessage)
router.get("/GetMessages", verifyToken, messageController.GetMessages)

export default router