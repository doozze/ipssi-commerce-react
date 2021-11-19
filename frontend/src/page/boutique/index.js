import './index.css'
import { VignetteProduct } from '../../components/VignetteProduct'
import {H1Title} from "../../components/h1Title";
import {useAPIContext} from "../../contexts/APIContext";
import {useEffect} from "react";

export const PageBoutique = ({ productList }) => {

    let vignettes
    //let products = productList
    const {products, setProducts} = useAPIContext();
    //products.map( product => { vignettes += <VignetteProduct urlProduct="" urlImage={product.photo} productName={product.nom_produit} vendor={product.vendeur} price={product.prix}/> })

    useEffect(()=> {console.log(products)},[products])

    return(
        <section className="PageBoutique">
            <H1Title content={productList.pageTitle}/>
            <div className="vignetteContainer">
                {
                    products && products.map( product =>  <VignetteProduct urlImage={product.photo} productName={product.nom_produit} vendor={product.vendeur} price={product.prix}/> )
                }
            </div>
        </section>
        
    )   
}
