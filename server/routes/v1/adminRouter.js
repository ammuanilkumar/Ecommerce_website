import express from "express";
import {
  adminCreate,
  adminProfile,
  adminLogout,
  adminLogin,
  deleteProduct,
  deleteUser,
  getAdminProductDetails,
  getAllProduct,
  getAllUserOrders,
  getSingleUserCart,
  getUsersList,
  checkAdmin,
  getAllUserOrders

} from "../../controller/adminController.js";
import { authAdmin } from "../../middlewares/authAdmin.js";

const router = express.Router();

router.post("/create", adminCreate);
router.post("/login", adminLogin);
router.get("/profile/:id",authAdmin, adminProfile);
router.post("/logout", adminLogout);
router,get("/getAllProduct", authAdmin, getAllProduct);
router.get("/details/:id", authAdmin, getAdminProductDetails);
router.delete("/deleteProduct/:id", authAdmin, deleteProduct);
router.get("/getuserlist", authAdmin, getUsersList);

router.delete("/deleteUser/:id", authAdmin, deleteUser);
router.get("/getuserorders", authAdmin, getAllUserOrders);
router.get("/getallcarts", authAdmin, getAllUsersCarts);
router.get("/getCart/:id", authAdmin, getSingleUserCart);
router.get("/check-admin", authAdmin, checkAdmin);
export default router;
