import './index.css'
import { SectionProduct } from '../../components/sectionProduct'

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
    return(
        <section className="pageProduct">
            <SectionProduct singleProduct={singleProduct}/>
            

        </section>

        
    )   
}
