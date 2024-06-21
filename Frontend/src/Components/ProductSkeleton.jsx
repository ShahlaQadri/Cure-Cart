

const ProductSkeleton = () => {
  return (
    <div className="border border-gray-200 rounded-md p-4 w-48 flex flex-col justify-between items-center space-y-2">
      <div className="w-full h-24 bg-gray-300 rounded"></div> {/* Image Placeholder */}
      <div className="w-3/4 h-4 bg-gray-300 rounded"></div> {/* Title Placeholder */}
      <div className="w-1/2 h-4 bg-gray-300 rounded"></div> {/* Price Placeholder */}
      <div className="w-1/4 h-4 bg-gray-300 rounded"></div> {/* Discount Badge Placeholder */}
    </div>
    
  );
};

export default ProductSkeleton;
