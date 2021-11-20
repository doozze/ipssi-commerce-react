import './index.css'
import { TextInfos } from '../TextInfos'
import { AddToCartContainer } from '../AddToCartContainer'
import { Button } from '../Button'

export const ProductInfosContainer = ({ singleProduct }) => {

    return (
        <div className="productInfosContainer">
            <TextInfos content={singleProduct.produit.price} textValue={singleProduct.produit.textValue}/>
            <TextInfos content={singleProduct.vendor.title} textValue={singleProduct.vendor.textValue}/>
            <Button value="Contacter le vendeur"/>
            <AddToCartContainer price={singleProduct.produit.price}/> 
        </div>
    )
}