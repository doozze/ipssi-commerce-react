import './index.css'
import { SectionProduct } from '../../components/sectionProduct'
import { AvisC } from '../../components/avisContainer'
import { H2Title } from '../../components/h2Title'

export const PageProduit = () => {

    const singleProduct = {
        produit: {
            imageUrl: "www.test.fr",
            name: "Name Test",
            price: "12",
            textValue: "Lorem description produit ipsum dolor sic amet",
        },
        vendor: {
            title: "boutique name",
            textValue: "Lorem description boutique",
        }
    }

    // To do loop on avis
    const avisContent = {
        title: "supr cool",
        textValue: "Lorem ipsum dolor sic amet",
    }
    return(
        <section className="pageProduct">
            <SectionProduct singleProduct={singleProduct}/>
            <article className="avis">
                <H2Title content="Avis"/>
                <AvisC content={avisContent}/>
            </article>

        </section>

        
    )   
}
