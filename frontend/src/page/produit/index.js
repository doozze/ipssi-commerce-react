import './index.css'
import { H1Title } from '../h1Title'
import { SectionProduct } from '../../components/sectionProduct'

export const pageBoutique = ({ product, vendor }) => {

    return(
        <section className="pageProduct">
            <SectionProduct product={product}/>
            

        </section>

        
    )   
}