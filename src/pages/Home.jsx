import api from "../../api";
import {useEffect, useState} from "react";
import ListagemProduto from "../components/ListagemProduto";

function Home(){
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
        const buscarProdutos = async() => {
            console.log("teste")
            try {
                const response = await api.get('products?limit=10');                   
                const data = response.data.slice(0, 10);
                setProducts(data);
                console.log(data);
            }   catch (error) {      
                setError("Não foi possível carregar os produtos.");
                console.error('Error fetching products:', error);
             }finally {
             setLoading(false);
}
    }      
 useEffect(() => {
       buscarProdutos()
    }, [])
    
    return (
    <>
        {loading ? (
            <p>Carregando produtos...</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <ListagemProduto products={products} />
        )}
    </>
)

}

export default Home;