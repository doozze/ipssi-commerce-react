import './index.css'
import { TextInfos } from '../TextInfos'
import { AddToCartContainer } from '../AddToCartContainer'
import { Button } from '../Button'

export const ProductInfosContainer = (props) => {


    //<TextInfos content={singleProduct.vendor.title} textValue={singleProduct.vendor.description}/>

    return (
        <div className="productInfosContainer">
            <TextInfos content={props.price} textValue={props.desc}/>
            <Button value="Contacter le vendeur"/>
            <AddToCartContainer price={props.price}/>
        </div>
    )
}