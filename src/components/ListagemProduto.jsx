import Produto from "./Produto";

function ListagemProduto({ products }) {
    return (
        <div>
            <h1>Listagem de Produtos</h1>

            <ul>
                {products.map((product) => (
                    <Produto
                        key={product.id}
                        product={product}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ListagemProduto;