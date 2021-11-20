import './index.css'
import { H3Title } from '../h3Title'
import { H2Title } from '../h2Title'
import { InputForm } from '../InputForm'
import { Button } from '../Button'

// Ajouter la checkbox

export const DataClientForm = ({infosTitle}) => {
    const adresseForm = {
        nom: {
            inputId: "nom",
            labelId: "nom",
            labelValue: "nom",
            type: "text",
        },
        prenom: {
            inputId: "prenom",
            labelId: "prenom",
            labelValue: "prenom",
            type: "text",
        },
        numeroVoie: {
            inputId: "numeroVoie",
            labelId: "numeroVoie",
            labelValue: "Numéro de voie",
            type: "text",
        },
        voie: {
            inputId: "voie",
            labelId: "voie",
            labelValue: "voie",
            type: "text",
        },
        ville: {
            inputId: "ville",
            labelId: "ville",
            labelValue: "ville",
            type: "text",
        },
        codePostal: {
            inputId: "codePostal",
            labelId: "codePostal",
            labelValue: "codePostal",
            type: "text",
        },
    }
    return (
        <section className="dataClient"> 

            <H2Title content={infosTitle.sectionTitle}/>
            <H3Title content={infosTitle.formTitle}/>

            <form className="infosClient">
                <div>
                    <InputForm props={ adresseForm.nom }/>
                    <InputForm props={ adresseForm.prenom }/>
                    <InputForm props={ adresseForm.numeroVoie }/>
                    <InputForm props={ adresseForm.voie }/>
                    <InputForm props={ adresseForm.ville }/>
                    <InputForm props={ adresseForm.codePostal }/>
                    <input type="checkbox" id="beVendor"/><label for="beVendor">Devenir Vendeur</label>
                </div>
                
                <Button value="modifier"/>
                
            </form>
            
        </section>
    )
}