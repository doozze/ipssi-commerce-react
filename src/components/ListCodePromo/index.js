import './index.css'
import {LigneCodePromo} from "../LigneCodePromo";
import {useState} from "react";

export const ListCodePromo= ({props}) => {

    const [dataCode] = useState(props.dataPromoCode);

    return (<div>
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