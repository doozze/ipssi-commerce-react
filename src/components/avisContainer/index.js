import './index.css'

export const avisC = ({props}) => {
    
    return (
        <div >
            <H2Title content={props.title}/>
            <TextContainer>{props.textValue}</TextContainer>
        </div>
    )
}