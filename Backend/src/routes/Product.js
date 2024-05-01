import express from "express";
import { adminOnly } from "../middlewares/Auth.js";
import {
  babyBestDeals,
  bestDeals,
  categoryFilter,
  deleteProduct,
  getAllProducts,
  getCategories,
  getProductDetails,
  newProduct,
  searchProduct,
  updateProduct,
} from "../controllers/Product.js";
import { uploadImage } from "../middlewares/Multer.js";
const router = express.Router();

// user routes
router.post("/new", adminOnly, uploadImage, newProduct);
router.get("/bestdeals", bestDeals);
router.get("/allproducts", getAllProducts);
router.get("/babybestdeals", babyBestDeals);
router.get("/getcategories", getCategories);
router.get("/search", searchProduct);
router.get("/categories", categoryFilter);
router
  .route("/:id")
  .get(getProductDetails)
  .put(adminOnly, uploadImage, updateProduct)
  .delete(adminOnly, deleteProduct);

export default router;
