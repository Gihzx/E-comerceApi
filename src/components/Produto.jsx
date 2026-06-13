function Produto({ product }) {
    return (
        <li>
            <h2>{product.title}</h2>

            <p>Categoria: {product.category.name}</p>

            <img
                src={product.images[0]}
                alt={product.title}
            />

            <p>Preço: R$ {product.price.toFixed(2)}</p>
        </li>
    );
}

export default Produto;