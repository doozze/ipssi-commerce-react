import './index.css'
import { ImageProduct } from '../ImageProduct'
import { ShortInfosModule } from '../ShortInfosProduct'
import { Button } from '../Button'

export const VignetteProduct = (props) => {

    return (
        <div className="vignette">
            <a href="">
                <ImageProduct src={props.urlImage} productName={props.productName}/>
                <ShortInfosModule productName={props.productName} vendor={props.vendor} price={props.price}/>
                <Button key={props.key} value="Voir le produit" position="boutique"/>
            </a>
        </div>
    )
}