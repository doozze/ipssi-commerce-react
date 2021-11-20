import './index.css'
import { H3Title } from '../h3Title'
import { LigneCommande } from '../ligneCommande'

export const Commande = ({commande}) => {

    // Requete pour toutes les lignes de commandes get object commande
    // False values : 
    const line = {
        urlImage: "www.test.fr",
        productName: "testProduct",
        price: "12",
        qte: 2,
        statut: "pending",
    }

    // Integrer condition if vendor & requete

    return (
        <section className="pendingCommande">
            <H3Title content={commande.sectionName}/>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Nom du produit</th>
                        <th>Prix</th>
                        <th>Qté</th>
                        <th>Total</th>
                        <th>statut</th>
                    </tr>
                        <LigneCommande commande={line}/>
                </table>  
        </section>
    )
}