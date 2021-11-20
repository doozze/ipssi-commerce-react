import './index.css';
import { ImageProduct } from '../ImageProduct';
import { Button } from '../Button'

export const LigneCommande= ({commande}) => {

    let totalLine= commande.price * commande.qte;
    let button;
    let g=false
    if (g){
       button = < Button value ="Annuler la commande"/>
    }else{
       button= <div> < Button value ="Editer"/> < Button value ="Réclamer"/></div>;
    }
    return (

                <tr>
                    <td><ImageProduct src={commande.UrlImage} alt={commande.productName} /></td>
                    <td>{commande.productName}</td>
                    <td>{commande.price}</td>
                    <td>{commande.qte}</td>
                    <td>{totalLine}</td>
                    <td>{commande.statut}</td>
                    <td>{button}</td>

                </tr>

    )
}