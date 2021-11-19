import './index.css'
import {Button} from "../Button";
import {H3Title} from "../h3Title";
import {TextForm} from "../TextForm";
export const CodeP = () => {
    return <div>
        <H3Title content= "Code Promo"/>
        <input type="text" placeholder="Saisissez votre code promo..." class="text" />
        <Button value= "Appliquer le code promo"/>
    </div>
} 