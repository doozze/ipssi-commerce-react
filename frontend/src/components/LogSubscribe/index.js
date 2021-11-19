import './index.css'
import { H2Title } from '../h2Title'
import { InputForm } from '../InputForm'
import { Button } from '../Button'

// Ajouter la checkbox

export const ConnexionForm = ({ props }) => {
    let checkbox;
    if (props.typeForm === "connexion"){
        checkbox = ""
    }else{
        checkbox = <div><input type="checkbox" id={props.checkBoxId}/><label for={props.checkBox.Id} value={props.checkBox.value}/></div>
    }
    return (
        <section className="dataClient"> 

            <H2Title content={props.sectionTitle}/>

            <form className="infosClient">
                <InputForm props={ props.login }/>
                <InputForm props={ props.password }/>
                {checkbox}
                <Button value="Connexion"/>
                
            </form>
            
        </section>
    )
}