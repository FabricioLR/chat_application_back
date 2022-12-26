import { Router } from "express"
import UserController from "./controllers/userController"

const router: Router = Router()

router.get("/", (req, res) => { return res.status(200).json({ message: "Running" }) })

router.post("/Register", UserController.Register)
router.post("/Authenticate", UserController.Authenticate)

export default router