import './index.css'
import { H3Title } from '../h3Title'
import { InputForm } from '../InputForm'
import { TextForm } from '../TextForm'
import { Button } from '../Button'

// Ajouter la checkbox

export const InfosBoutique = ({ boutique }) => {

    return (
        <section className="infosBoutique"> 

            <H3Title content={boutique.formTitle}/>

            <form className="infosClient">
                <InputForm content={ boutique.nomBoutique }/>
                <TextForm content={ boutique.description }/>

                <Button value="modifier"/>
                
            </form>
            
        </section>
    )
}