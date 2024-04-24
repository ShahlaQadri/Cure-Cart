import { myCache } from "../index.js";
import Product from "../models/Product.js";

export const invalidateCache = async ({ product }) => {
  if (product) {
    const productKeys = [
      "best-deals",
      "baby-deals",
      "all-products",
      "categories",
    ];

    const products = await Product.find({}).select("_id");
    products.forEach((p) => {
      productKeys.push(`product-${p._id}`);
    });
    myCache.del(productKeys);
  }
  
};
