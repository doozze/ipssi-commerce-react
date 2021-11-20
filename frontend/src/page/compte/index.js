import './index.css'
import { H1Title } from '../../components/h1Title'
import { DataClientForm } from '../../components/DataClient'

export const PageCompte = ({ pageTitle }) => {
    const dataForm = {
        sectionTitle: "Informations de compte",
        formTitle: "Adresse de livraison",

    }
    return(
        <section className="pageCompte">
            <H1Title content={pageTitle}/>
            <DataClientForm infosTitle={dataForm}/>
        </section>
        
    )   
}
