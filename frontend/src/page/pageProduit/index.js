import './index.css'
import { SectionProduct } from '../../components/SectionProduct'
import { AvisC } from '../../components/avisContainer'
import { H2Title } from '../../components/h2Title'


export const PageProduit = () => {

    /*
        const singleProduct = {
            produit: {
                photo: "www.test.fr",
                nom_produit: "Name Test",
                prix: "12",
                description: "Lorem description pageProduit ipsum dolor sic amet",
            },
            vendor: {
                title: "La Boutique du Vendeur",
                textValue: "Lorem description pageBoutique",
            }
        };*/

    // To do loop on avis
    const avisContent = {
        title: "supr cool",
        textValue: "Lorem ipsum dolor sic amet",
    }
    return(
        <section className="pageProduct">
                <SectionProduct />
                <article className="avis">
                    <H2Title content="Avis"/>
                    <AvisC content={avisContent}/>
                </article>
        </section>
    )   
}
