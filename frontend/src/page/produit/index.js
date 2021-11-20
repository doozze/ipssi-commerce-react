import './index.css'
import { SectionProduct } from '../../components/sectionProduct'

export const PageProduit = ({ product, vendor }) => {

    return(
        <section className="pageProduct">
            <SectionProduct product={product}/>
            

        </section>

        
    )   
}
