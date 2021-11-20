import './index.css'
import { H2Title } from '../h2Title'
import { InputForm } from '../InputForm'
import { Button } from '../Button'
import {useEffect} from "react";
import {useAPIContext} from "../../contexts/APIContext";


export const ConnexionForm = (props) => {
    const inputFormData = props.couple;

    const {client, setClient} = useAPIContext();

    let checkbox;
    if (props.typeForm === "Se Connecter"){
        checkbox = ""
    }else{
        checkbox = <div><input type="checkbox" id="beVendor"/><label for="beVendor">Devenir Vendeur</label></div>
    }

    const handleSubmit = () => {
        console.log("aaaaaaaaaa");
    }
    return (
        <section className="dataClient"> 

            <H2Title content={props.sectionTitle}/>

            <form className="infosClient" id={props.id} type="submit">
                <InputForm inputId={inputFormData.login.inputId} labelId={inputFormData.login.labelId} labelValue={inputFormData.login.labelValue} type={inputFormData.login.type}/>
                <InputForm inputId={inputFormData.password.inputId} labelId={inputFormData.password.labelId} labelValue={inputFormData.password.labelValue} type={inputFormData.password.type}/>
                {checkbox}
                <Button value={props.typeForm} onSubmit={handleSubmit()} id={props.buttonId}/>
            </form>
            
        </section>
    )
}