import Produto from './Produto';

function ListagemProduto({ products }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Produtos
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Produto
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
export default ListagemProduto;