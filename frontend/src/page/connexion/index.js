import './index.css'
import { H1Title } from '../../components/h1Title'
import { ConnexionForm } from '../../components/LogSubscribe'

export const PageConnexion = ({ pageTitle }) => {

    const formulaire = {
        connexion: {
            typeForm: "connexion",
            login: {
                inputId: "login",
                labelId: "login",
                labelValue: "mail",
                type: "text",
            },
            password: {
                inputId: "password",
                labelId: "password",
                labelValue: "Mot de passe",
                type: "password",
            },
        },
        inscription: {
            typeForm: "inscription",
            login: {
                inputId: "login",
                labelId: "login",
                labelValue: "mail",
                type: "text",
            },
            password: {
                inputId: "password",
                labelId: "password",
                labelValue: "Mot de passe",
                type: "password",
            },
        }
    }
    console.log(formulaire)
    return(
        <section className="pageConnexion">
            <H1Title content={pageTitle}/>
            <div className="formContainer">
                <ConnexionForm props={formulaire.connexion}/>
                <ConnexionForm props={formulaire.inscription}/>
            </div>
        </section>
        
    )   
}
