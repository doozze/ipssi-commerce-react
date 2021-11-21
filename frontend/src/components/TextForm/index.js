import './index.css'

export const TextForm = (props) => {

    return (<div className="textForm">
        <label for={props.inputId} id={props.labelId}>{props.labelValue}</label>
        <textarea type = "text" id={props.inputId}></textarea>
    </div>)

}

