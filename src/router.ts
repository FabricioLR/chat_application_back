import { Router } from "express"
import UserController from "./controllers/userController"
import contactController from "./controllers/contactController"

import verifyToken from "./services/security/verifyTokenSecurity"
import messageController from "./controllers/messageController"

const router: Router = Router()

router.post("/Register", UserController.Register)
router.post("/Authenticate", UserController.Authenticate)

router.post("/AddContact", verifyToken, contactController.AddContact)
router.get("/GetContacts", verifyToken, contactController.GetContacts)

router.post("/SaveMessage", verifyToken, messageController.SaveMessage)
router.post("/GetMessages", verifyToken, messageController.GetMessages)

export default router