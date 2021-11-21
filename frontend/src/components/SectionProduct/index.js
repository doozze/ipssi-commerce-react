import './index.css'
import { ImageProduct } from '../ImageProduct'
import { ProductInfosContainer } from '../productInfosContainer'
import { H1Title } from '../h1Title'
import {useAPIContext} from "../../contexts/APIContext";
import {useEffect} from "react";
import axios from "../../config/axios";

export const SectionProduct = ({singleProduct}) => {

    const{product, setProduct} = useAPIContext()

    useEffect(()=> {},[product]);

    console.log("render section produit")
    return (
        <section className="sectionProduct">
            {
                product && product.map(prod => <div>
                    <H1Title content={prod.nom_produit}/>
                <div className="productBody">
                <ImageProduct src={prod.photo} alt={prod.nom_produit}/>
                <ProductInfosContainer price ={prod.prix} desc={prod.description} />
                </div> </div>
                )
            }

        </section>
    )
}