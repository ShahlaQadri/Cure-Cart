import express from "express"
import { IsAuthenticated, adminOnly } from "../middlewares/Auth.js";
import { deleteOrder, getAllPresciptionOrders, getMyPastPresciption, getMyPresciptionOrders, getPresciptionOrderDetails, orderViaPresciption, processStatus } from "../controllers/PresciptionOrder.js";
import { uploadImage } from "../middlewares/Multer.js";

const router = express.Router()

router.post("/new",uploadImage,IsAuthenticated, orderViaPresciption);
router.get("/all", adminOnly,getAllPresciptionOrders);
router.get("/my",IsAuthenticated, getMyPresciptionOrders);
router.get("/my-presciptions",IsAuthenticated,getMyPastPresciption );
router.route("/:id").get(getPresciptionOrderDetails).put(processStatus).delete(adminOnly, deleteOrder);;



export default router