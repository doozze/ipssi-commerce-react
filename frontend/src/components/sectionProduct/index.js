import './index.css'
import { ImageProduct } from '../ImageProduct'
import { ProductInfosContainer } from '../productInfosContainer'
import { H1Title } from '../h1Title'

export const SectionProduct = ({ product, vendor }) => {
    
    return (
        <section className="sectionProduct">
            <H1Title content={product.name}/>
            <div className="productBody">
                <ImageProduct src={product.imageUrl} alt={product.name}/>
                <ProductInfosContainer product={product.price, product.title, product.textValue} vendor={vendor.title, vendor.textValue}/>
            </div>
        </section>
    )
}