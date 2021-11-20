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
        checkbox = <div><input type="checkbox" id="beVendor"/><label for="beVendor">Devenir Vendeur</label></div>
    }
    return (
        <section className="dataClient"> 

            <H2Title content={props.sectionTitle}/>

            <form className="infosClient">
                <InputForm props={ props.login }/>
                <InputForm props={ props.password }/>
                {checkbox}
                <Button value={props.typeForm}/>
                
            </form>
            
        </section>
    )
}