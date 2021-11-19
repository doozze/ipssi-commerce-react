import './index.css'

export const LigneCodePromo= (props) => {

    return (
        <tr className="ligneCodePromo">
            <td className="printNomCodePromo" id={props.nomCodeId}>{props.nomCode}</td>
            <td className="printReductionCode" id={props.reductionCodeId}>{props.reductionCode}</td>
        </tr>
    )
}