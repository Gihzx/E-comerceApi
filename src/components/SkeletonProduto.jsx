function SkeletonProduto() {
  return (
    <div className="animate-pulse">
      <div className="h-64 w-full rounded-md bg-gray-200"></div>

      <div className="mt-4">
        <div className="h-4 w-3/4 rounded bg-gray-200"></div>

        <div className="mt-2 h-3 w-1/2 rounded bg-gray-200"></div>

        <div className="mt-4 h-4 w-1/4 rounded bg-gray-200"></div>
      </div>
    </div>
  );
}

export default SkeletonProduto;