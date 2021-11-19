import { H2Title } from '../h2Title'
import { TextContainer } from '../TextContainer'
import './index.css'

export const TextInfos = (props) => {
    
    return (
        <div className="textInfos">
            <H2Title content={props.title}/>
            <TextContainer>{props.textValue}</TextContainer>
        </div>
    )
}