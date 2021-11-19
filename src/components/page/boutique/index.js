import './index.css'
import { H1Title } from '../h1Title'
import { VignetteProduct } from '../../VignetteProduct'

export const pageBoutique = ({ productList }) => {

    let vignettes
    let products = productList
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
