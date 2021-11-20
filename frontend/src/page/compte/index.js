import './index.css'
import { H1Title } from '../../components/h1Title'
import { DataClientForm } from '../../components/DataClient'
import { Commande } from '../../components/commande'
import { InfosBoutique } from '../../components/InfosBoutique'
import { ListCodePromo } from '../../components/LigneCodePromo'
import { CreerCodePromo } from '../../components/ListCodePromo'

export const PageCompte = ({ pageTitle }) => {
    const dataForm = {
        sectionTitle: "Informations de compte",
        formTitle: "Adresse de livraison",

    }

    const pendingCommande = {
        sectionName: "Commande en cours"
    }

    const boutique = {
        formTitle: "Informations Générales",
            nomBoutique: {
                    inputId: "boutiqueName",
                    labelId: "boutiqueName",
                    labelValue: "Nom de la boutique",
                    type: "text",
            },
            description: {
                    inputId: "descriptionBoutique",
                    labelId: "descriptionBoutique",
                    labelValue: "description de la boutique",
                    type: "text",
            },
    }
    return(
        <section className="pageCompte">
            <H1Title content={pageTitle}/>
            <DataClientForm infosTitle={dataForm}/>
            <Commande commande={pendingCommande}/>
            <InfosBoutique boutique={boutique}/>
            <ListCodePromo />
            <CreerCodePromo />
        </section>
        
    )   
}
