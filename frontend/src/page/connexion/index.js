import './index.css'
import { H1Title } from '../../components/h1Title'
import { ConnexionForm } from '../../components/ConnexionForm'

export const PageConnexion = ({ pageTitle }) => {

    const form = {
        connexion: {
            typeForm: "Se Connecter",
            buttonId: "ConnexionButton",
            login: {
                inputId: "loginC",
                labelId: "lblLoginC",
                labelValue: "mail",
                type: "text",
            },
            password: {
                inputId: "passwordC",
                labelId: "lblPasswordC",
                labelValue: "Mot de passe",
                type: "password",
            },
        },
        inscription: {
            typeForm: "S'inscrire",
            buttonId: "InscriptionButton",
            login: {
                inputId: "loginI",
                labelId: "lblLoginI",
                labelValue: "mail",
                type: "text",
            },
            password: {
                inputId: "passwordI",
                labelId: "lblPasswordI",
                labelValue: "Mot de passe",
                type: "password",
            },
        }
    }

    const handleConnexionClick = event => {

    }

    const handleInscriptionClick = () => {

    }

    // TODO useState login/password
    return(
        <section className="pageConnexion">
            <H1Title content="Page de Connexion/Inscription"/>
            <div className="formContainer">
                <ConnexionForm id="ConnexionForm" couple={form.connexion} sectionTitle="Connexion" typeForm={form.connexion.typeForm}/>
                <ConnexionForm id="InscriptionForm" couple={form.inscription} sectionTitle="Inscription" typeForm={form.inscription.typeForm}/>
            </div>
        </section>
        
    )   
}
