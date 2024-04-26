import { myCache } from "../index.js";
import Product from "../models/Product.js";

export const invalidateCache = async ({ product ,admin,order,userId,orderId}) => {
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
  if(order){
    const orderKeys = ["all-orders", `myorders-${userId}`, `order-${orderId}`];
    myCache.del(orderKeys);

  }
  if(admin){

  }
  
};


export const reduceStock = async(orderItems)=>{
  for (let index = 0; index < orderItems.length; index++) {
    const order = orderItems[index];
    let product = await Product.findById({_id:order.productId});
    if(!product) throw new  Error('Product Not Found');
    console.log("stock ",product.stock)
    console.log("order Quantitiy ", order.quantity);
    product.stock -= order.quantity;
    await product.save();
  }

}