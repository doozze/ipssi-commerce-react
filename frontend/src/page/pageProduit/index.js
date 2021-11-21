import './index.css'
import { SectionProduct } from '../../components/SectionProduct'
import { AvisC } from '../../components/avisContainer'
import { H2Title } from '../../components/h2Title'


export const PageProduit = () => {

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
