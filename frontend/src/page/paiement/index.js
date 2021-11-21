import './index.css'
import { H1Title } from '../../components/h1Title'
import { DataClientForm } from '../../components/DataClient'
import { PaymentBox } from '../../components/PaymentBox'

export const PaymentPage = ({ pageTitle }) => {


    // TODO useState login/password
    return(
        <section className="pageConnexion">
            <H1Title content="Paiement"/>
            <div className="formContainer">
                <div><DataClientForm/></div>
                <div><PaymentBox/></div>
            </div>
        </section>
        
    )   
}
