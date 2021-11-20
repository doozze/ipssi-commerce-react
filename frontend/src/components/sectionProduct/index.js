import './index.css'
import { ImageProduct } from '../ImageProduct'
import { ProductInfosContainer } from '../productInfosContainer'
import { H1Title } from '../h1Title'

export const SectionProduct = ({ singleProduct }) => {
    console.log(singleProduct)

    return (
        <section className="sectionProduct">
            <H1Title content={singleProduct.produit.name}/>
            <div className="productBody">
                <ImageProduct src={singleProduct.produit.imageUrl} alt={singleProduct.produit.name}/>
                <ProductInfosContainer singleProduct={singleProduct}/>
            </div>
        </section>
    )
}