import './index.css'
import { H3Title } from '../h3Title'
import { InputForm } from '../InputForm'
import { TextForm } from '../TextForm'
import { Button } from '../Button'

// Ajouter la checkbox

export const DataClientForm = ({ boutique }) => {
    return (
        <section className="infosBoutique"> 

            <H3Title content={boutique.formTitle}/>

            <form className="infosClient">
                <InputForm props={ boutique.nomBoutique }/>
                <TextForm props={ boutique.description }/>

                <Button value="modifier"/>
                
            </form>
            
        </section>
    )
}