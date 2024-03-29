import './index.css'
import { VignetteProduct } from '../../components/VignetteProduct'
import {H1Title} from "../../components/h1Title";
import {useAPIContext} from "../../contexts/APIContext";
import {useEffect} from "react";

export const PageBoutique = ({ productList }) => {

    const {products, setProducts} = useAPIContext();

    useEffect(()=> {},[products])

    return(
        <section className="PageBoutique">
            <H1Title content={productList}/>
            <div className="vignetteContainer" id="productContainer">
                {
                    products && products.map(prod => <VignetteProduct keyId={prod.id} id="vignetteProduct" urlImage={prod.photo} productName={prod.nom_produit} vendor={prod.id_vendeur} price={prod.prix}/> )
                }
            </div>
        </section>
        
    )   
}
