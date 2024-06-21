

const SkeletonLoader = ({ rows = 5, columns = 5 }) => {
  return (
    <div className="animate-pulse space-y-4">
      {/* Table Header */}
      <div className="flex space-x-4">
        {[...Array(columns)].map((_, idx) => (
          <div key={idx} className="h-6 bg-gray-300 rounded w-full"></div>
        ))}
      </div>

      {/* Table Body */}
      <div className="space-y-2">
        {[...Array(rows)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {[...Array(columns)].map((_, colIndex) => (
              <div key={colIndex} className="h-6 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
