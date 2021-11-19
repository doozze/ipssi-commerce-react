import './index.css'
import {TextForm} from "../TextForm";
import {H3Title} from "../h3Title";
import {Button} from "../Button";
import {TextContainer} from "../TextContainer";

export const PaymentBox = (props) => {

    return (
        <div className="PaymentBox" id="paymentBox">
            <p>
                <ul>
                    <li><a href="#infosCB" id="menuCB" class="active">CB</a></li>
                    <li><a href="#infosVir" id="menuVir">Virement</a></li>
                    <li><a href="#infosPP" id="menuPP">Paypal</a></li>
                    <li><a href="#infosCC" id="menuCC">Carte Cadeaux</a></li>
                    <li><a href="#infosBT" id="menuBT">BitCoin</a></li>
                </ul>
            </p>
            <div className="InfosPayment" id="infosPayment">
                <div className="infoPayDiv" id="infosCB">
                    <div>
                        <div>
                            <p> <TextForm inputId="inputCardName" labelId="labelInputCardName" labelValue="Nom figurant sur la carte"/> </p>
                            <p> <TextForm inputId="inputCardNumber" labelId="labelInputCardNumber" labelValue="Numéro de carte"/> <TextForm inputId="inputCardCCV" labelId="labelInputCardCCV" labelValue="Code CCV"/> </p>
                        </div>
                        <div>
                            <H3Title content="Total Commande (€)"/>
                            <Button value = "Effectuer le paiement"/>
                            <TextContainer textValue="En effectuant la commande, j'accepte les CGU"/>
                        </div>
                    </div>
                </div>
                <div className="infoPayDiv" id="infosVir">

                </div>
                <div className="infoPayDiv" id="infosPP">

                </div>
                <div className="infoPayDiv" id="infosCC">

                </div>
                <div className="infoPayDiv" id="infosBT">

                </div>
            </div>
        </div>
    )
}