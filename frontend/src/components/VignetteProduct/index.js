import './index.css'
import { ImageProduct } from '../ImageProduct'
import { ShortInfosModule } from '../ShortInfosProduct'

export const VignetteProduct = (props) => {
    console.log(props)
    return (
        <div className="vignette">
            <a href="">
                <ImageProduct src={props.urlImage} productName={props.productName}/>
                <ShortInfosModule productName={props.productName} vendor={props.vendor} price={props.price}/>
            </a>
        </div>
    )
}