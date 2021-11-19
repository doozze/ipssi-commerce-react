import './index.css';
import {PriceModule} from '../PriceModule';
import {H2Title} from '../h2Title';
import {H3Title} from '../h3Title';

export const ShortInfosModule = ({ productName, vendor, price }) => {
    
    return (
        <div className="shortInfosModule">
            <H2Title content={productName}/>
            <H3Title content={vendor}/>
            <PriceModule price={price}/>
        </div>
    )
}