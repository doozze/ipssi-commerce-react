import './index.css'
import { ImageProduct } from '../ImageProduct'
import { ShortInfosModule } from '../ShortInfosProduct'

export const VignetteProduct = ({ productName, vendor, price, urlImage, urlProduct }) => {
    
    return (
        <div className="vignette">
            <a href={urlProduct}>
                <ImageProduct src={urlImage} productName={productName}/>
                <ShortInfosModule productName={productName} vendor={vendor} price={price}/>
            </a>
        </div>
    )
}