import './index.css'
import { PriceModule } from '../PriceModule'
import { Button } from '../Button'
export const AddToCartContainer = (props) => {
    
    return (
        <div className ="AddToCartContainer">
            <input type="number" />
            <PriceModule price={props.price} />
            <Button value={props.valueButton}/>
        </div>
    )
    
    
}