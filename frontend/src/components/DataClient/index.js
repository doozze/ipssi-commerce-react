import './index.css'
import { H3Title } from '../h3Title'
import { H2Title } from '../h2Title'
import { InputForm } from '../InputForm'
import { Button } from '../Button'

// Ajouter la checkbox

export const DataClientForm = ({ props }) => {
    return (
        <section className="dataClient"> 

            <H2Title content={props.sectionTitle}/>
            <H3Title content={props.formTitle}/>

            <form className="infosClient">
                <InputForm props={ props.nom }/>
                <InputForm props={ props.prenom }/>
                <InputForm props={ props.numeroVoie }/>
                <InputForm props={ props.voie }/>
                <InputForm props={ props.ville }/>
                <InputForm props={ props.codePostal }/>

                <Button value="modifier"/>
                
            </form>
            
        </section>
    )
}