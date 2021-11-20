import './index.css'
import {useState} from "react";

export const InputForm = (props) => {

    const[myInput, setMyInput] = useState();

    const handleChange = event => {
        setMyInput();
        event.preventDefault();
    }

    return (<div className="inputForm">
        <label for={props.inputId} id={props.labelId}>{props.labelValue}</label>
        <input type ={props.type} id={props.inputId} onChange={handleChange}/>
    </div>)

}