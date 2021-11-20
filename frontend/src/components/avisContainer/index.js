import './index.css'
import { H2Title } from '../h2Title'
import { TextContainer } from '../TextContainer'
export const AvisC = ({content}) => {
    
    return (
        <div >
            <H2Title content={content.title}/>
            <TextContainer textValue={content.textValue}/>
        </div>
    )
}