import './index.css'
import {useNavigate} from 'react-router-dom';

export const Button = (props) => {

    const history = useNavigate();

    const onButtonclick = () => {
        history("/produit")
    }

    if(props.position == "boutique"){
        return (
            <input type="button" value={props.value} id={props.buttonId} onClick={onButtonclick}/>
        )
    }
    else {
        return <input type="button" value={props.value} id={props.buttonId}/>
    }
}