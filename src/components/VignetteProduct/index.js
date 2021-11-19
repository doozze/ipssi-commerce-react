import './index.css'
import { ImageProduct } from '../ImageProduct'
import { ShortInfosModule } from '../ShortInfosProduct'

export const VignetteProduct = ({ props }) => {
    
    return (
        <div className="vignette">
            <a href={props.urlProduct}>
                <ImageProduct src={props.urlImage} productName={props.productName}/>
                <ShortInfosModule productName={props.productName} vendor={props.vendor} price={props.price}/>
            </a>
        </div>
    )
}