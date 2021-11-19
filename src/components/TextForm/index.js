import './index.css'

export const TextForm = (props) => {
    return (<div className="textForm">
        <p><label for={props.inputId} id={props.labelId}>{props.labelValue}</label></p>
        <p><input type = "text" id={props.inputId}/></p>
    </div>)

}

