import './index.css'
import { VignetteProduct } from '../../components/VignetteProduct'
import {H1Title} from "../../components/h1Title";
import {useAPIContext} from "../../contexts/APIContext";

export const PageBoutique = ({ productList }) => {

    let vignettes
    //let products = productList
    const {products, setProducts} = useAPIContext();
    products.foreach( product =>  vignettes += <VignetteProduct props={product}/> )

    return(
        <section className="pageBoutique">
            <H1Title content={productList.pageTitle}/>
            <div className="vignetteContainer">
                {vignettes}
            </div>
        </section>
        
    )   
}
