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
            <div className="vignetteContainer">
                {
                    products && products.map( product =>  <VignetteProduct urlImage={product.photo} productName={product.nom_produit} vendor={product.vendeur} price={product.prix}/> )
                }
            </div>
        </section>
        
    )   
}
