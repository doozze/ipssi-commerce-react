import './index.css'

export const InputForm = (props) => {

    let entry;

    const handleChange = event => {
        this.setState({let : event.target.value})
    }

    return (<div className="inputForm">
        <label for={props.inputId} id={props.labelId}>{props.labelValue}</label>
        <input type ={props.type} id={props.inputId} onChange={this.handleChange}/>
    </div>)

}