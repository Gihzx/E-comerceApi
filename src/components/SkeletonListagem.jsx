import SkeletonProduto from "./SkeletonProduto";

function SkeletonListagem() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonProduto key={index} />
          ))}

        </div>

      </div>
    </div>
  );
}

export default SkeletonListagem;