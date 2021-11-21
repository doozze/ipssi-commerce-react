import './index.css'
import {useNavigate} from 'react-router-dom';
import {useAPIContext} from "../../contexts/APIContext";
import {useEffect} from "react";

export const Button = (props) => {

    const{idProduit, setidProduit} = useAPIContext();

    let navigate = useNavigate();

    useEffect(()=> {},[idProduit]);


    const onButtonclick = () => {
        //setidProduit(2);
        //const path = "/produit/" ;
        const path ="/produit/" + idProduit;
        //console.log({path});
        navigate(path);
    }

    if(props.position === "boutique"){
        return (
            <input type="button" value={props.value} id={props.buttonId} onClick={onButtonclick} name={props.key}/>
        )
    }
    else {
        return <input type="button" value={props.value} id={props.buttonId}/>
    }
}