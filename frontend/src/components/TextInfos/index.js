import { H2Title } from '../h2Title'
import { TextContainer } from '../TextContainer'
import './index.css'

export const TextInfos = ({content, textValue}) => {

    return (
        <div className="textInfos">
            <H2Title content={content}/>
            <TextContainer textValue={textValue}/>
        </div>
    )
}