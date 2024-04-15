import express from "express";
import {adminOnly } from "../middlewares/isAuthenticated.js"
import { babyBestDeals, bestDeals, deleteProduct, getAllProducts, getCategories, getProductDetails, newProduct, updateProduct } from "../controllers/Product.js";
import { uploadImage } from "../middlewares/multer.js";
const router = express.Router();

// user routes
router.post("/new",adminOnly,uploadImage,newProduct );
router.get("/bestdeals",bestDeals );
router.get("/allproducts", getAllProducts);
router.get("/babybestdeals", babyBestDeals);
router.get("/categories", getCategories);
router.route("/:id").get(getProductDetails).put(adminOnly,uploadImage,updateProduct).delete(adminOnly,deleteProduct);

export default router;
