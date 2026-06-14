function Produto({ product }) {
  return (
    <div className="group relative">
      <img
        src={product.image}
        alt={product.title}
    
         className="aspect-square w-full rounded-md bg-gray-200 object-contain group-hover:opacity-75  lg:aspect-auto lg:h-80"
      />

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            {product.title}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {product.category}
          </p>
        </div>

        <p className="text-sm font-medium text-gray-900">
          R$ {Number(product.price).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Produto;