import './index.css'
import { H3Title } from '../h3Title'
import { LigneCommande } from '../ligneCommande'
import { Button } from '../Button'

export const Commande = ({props}) => {
    let buton;
    let g=false
    if (g){
       buton = < Button value ="Annuler la commande"/>
    }else{
       buton= <div> < Button value ="Editer"/> < Button value ="Réclamer"/></div>;
    }
    return (
        <div >
            <H3Title content="Bonjour"/>
            <div>
                <div class="tab"><LigneCommande /></div>
                <div class= "annuler">
                    {buton}
                </div>
            </div>
        </div>
    )
}