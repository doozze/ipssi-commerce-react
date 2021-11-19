import './index.css'
import { H2Title } from '../h2Title'
import { TextContainer } from '../TextContainer'
export const avisC = ({props}) => {
    
    return (
        <div >
            <H2Title content={props.title}/>
            <TextContainer>{props.textValue}</TextContainer>
        </div>
    )
}