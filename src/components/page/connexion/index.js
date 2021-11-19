import './index.css'
import { H1Title } from '../h1Title'
import { ConnexionForm } from '../../LogSubscribe'

export const pageConnexion = ({ props, connexion, inscription }) => {

    return(
        <section className="pageConnexion">
            <H1Title content={props.pageTitle}/>
            <div className="formContainer">
                <ConnexionForm props={props.connexion}/>
                <ConnexionForm props={props.inscription}/>
            </div>
        </section>
        
    )   
}
