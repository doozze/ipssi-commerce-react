import './index.css'
import { TextInfos } from '../TextInfos'
import { AddToCartContainer } from '../AddToCartContainer'
import { Button } from '../Button'

export const ProductInfosContainer = ({ product, vendor }) => {
    
    return (
        <div className="productInfosContainer">
            <TextInfos content={product.price} value={product.textValue}/>
            <TextInfos content={vendor.title} value={vendor.textValue}/>
            <Button value="Contacter le vendeur"/>
            <AddToCartContainer price={product.price}/> 
        </div>
    )
}