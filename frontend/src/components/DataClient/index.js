import './index.css'
import { H3Title } from '../h3Title'
import { H2Title } from '../h2Title'
import { InputForm } from '../InputForm'
import { Button } from '../Button'
import {useEffect} from "react";
import {useAPIContext} from "../../contexts/APIContext";

// Ajouter la checkbox

export const DataClientForm = ({infosTitle}) => {

    const {client, setClient} = useAPIContext();
    useEffect(()=> {},[client]);

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

            <form className="infosClient">
                {
                    client && client.map(c =>
                        <div>

                            <InputForm inputId={adresseForm.nom.inputId} labelId={adresseForm.nom.labelId}
                                       labelValue={client.nom} type={adresseForm.nom.type}/>
                            <InputForm inputId={adresseForm.prenom.inputId} labelId={adresseForm.prenom.labelId}
                                       labelValue={client.prenom} type={adresseForm.prenom.type}/>
                            <H3Title content={infosTitle.formTitle}/>
                            <InputForm inputId={adresseForm.voie.inputId} labelId={adresseForm.voie.labelId}
                                       labelValue={adresseForm.voie.labelValue} type={adresseForm.voie.type}/>
                            <InputForm inputId={adresseForm.voie.inputId} labelId={adresseForm.voie.labelId}
                                       labelValue={adresseForm.voie.labelValue} type={adresseForm.voie.type}/>
                            <InputForm inputId={adresseForm.ville.inputId} labelId={adresseForm.ville.labelId}
                                       labelValue={adresseForm.ville.labelValue} type={adresseForm.ville.type}/>
                            <InputForm inputId={adresseForm.codePostal.inputId} labelId={adresseForm.codePostal.labelId}
                                       labelValue={adresseForm.codePostal.labelValue}
                                       type={adresseForm.codePostal.type}/>
                            <input type="checkbox" id="beVendor"/><label htmlFor="beVendor">Devenir Vendeur</label>
                        </div>
                    )

                }
                <Button value="modifier"/>

            </form>
            
        </section>
    )
}