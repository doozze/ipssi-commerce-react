import './index.css'
import {LigneCodePromo} from "../LigneCodePromo";
import {useState} from "react";
import {H2Title} from "../h2Title";
import {H3Title} from "../h3Title";

export const ListCodePromo= ({props}) => {

    const [dataCode] = useState(props.dataPromoCode);

    return (
        <div className="ListCodePromo">
            <H2Title className="titleListCode" content="Codes Promo"/>
            <H3Title className="subTitleListCode" content="Liste des Codes Promo"/>
        <table className="tabCodePromo">
            <thead>
                <tr className="tabCodePromoHead">
                    <td>Nom Code Promo</td>
                    <td>Reduction (%)</td>
                </tr>
            </thead>
            <tbody>
            {dataCode.map((codePromo)=> (
                <LigneCodePromo nomCode={codePromo.code} reductionCode={codePromo.pourcentageReduction} nomCodeId={}
                reductionCodeId={}/>
            ))}
            </tbody>
        </table>
    </div>)
}