import './index.css'
import {LigneCodePromo} from "../LigneCodePromo";
import {H2Title} from "../h2Title";
import {H3Title} from "../h3Title";
import {useAPIContext} from "../../contexts/APIContext";
import {useEffect, useState} from "react";

export const ListCodePromo= (props) => {

    const [dataCode] = useState(props.dataPromoCode);
    const codePromo = {
        code: "ipssi2021",
        reduction: "25",
    }

    const {codes, setCodes} = useAPIContext();
    useEffect(()=> {},[codes]);

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
            {codes && codes.map((codePromo)=> (
                <LigneCodePromo nomCode={codePromo.code} reductionCode={codePromo.pourcentageReduction} nomCodeId="a"
                reductionCodeId="a"/>
            ))}
            </tbody>
        </table>
    </div>)
}