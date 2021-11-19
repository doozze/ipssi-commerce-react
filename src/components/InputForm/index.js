import './index.css'

export const InputForm = (props) => {
    return (<div className="inputForm">
        <label for={props.inputId} id={props.labelId}>{props.labelValue}</label>
        <input type = "text" id={props.inputId}/>
    </div>)

}