import './index.css'

export function TextContainer(props) {

    return (<div className="textContainer">
        <p><label>{props.labelValue}</label></p>
        <p><input type="text"/></p>
    </div>)

}