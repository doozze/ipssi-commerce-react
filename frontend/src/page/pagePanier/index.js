import './index.css'
import { H1Title } from '../../components/h1Title'
import { H3Title } from '../../components/h3Title'
import { Commande } from '../../components/commande'
import { CodeP } from '../../components/codePromo'
import { Button } from '../../components/Button'

export const PagePanier = ({ props }) => {

    let commande = {
        urlImage: "www.test.fr",
        productName: "testProduct",
        price: 12,
        qte: 2,
        statut: "pending",
        totalPrice: "24",
        sectioName: "",
    }
    let reduc = 0;
    let totalWithReduc = commande.totalPrice - ( commande.totalPrice * reduc / 100 )
    let msgTotalWithReduc = "Total avec réduction : " + totalWithReduc + "€";
    return(
        <section className="pagePanier">
            <H1Title content="Panier"/>
            <Commande commande={commande}/>
            <CodeP />
            <article>
                <H3Title content={msgTotalWithReduc}/>
                <Button value="Valider la commande"/>
            </article>

        </section>
        
    )   
}
