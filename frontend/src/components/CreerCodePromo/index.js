import './index.css'

import {Button} from "../Button";
import {H3Title} from "../h3Title";
import {TextForm} from "../TextForm";

export const CreerCodePromo= () => {

    return(
        <div className="CreerCodePromo">
            <div> <H3Title content="Créer Code Promo"/> </div>
            <div className="FormCodePromo">
                <TextForm inputId="nomCodeInput" labelId="nomCodeLabel" labelValue="Nom Code Promo"/>
                <TextForm inputId="reducCodeInput" labelId="reducCodeLabel" labelValue="Réduction (%)"/>
                <Button value="Créer code Promo"/>
            </div>
        </div>
    )
}
