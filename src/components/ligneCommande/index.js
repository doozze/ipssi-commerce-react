import './index.css';
export const Commande= ({productName, price, urlImage, qte, totale}) => {
    totale= price*qte;
    return (
        <div> 
            <table>
                <tr>
                    <th>Image</th>
                    <th>Nom du produit</th>
                    <th>Prix</th>
                    <th>Qté</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>{urlImage}</td>
                    <td>{productName}</td>
                    <td>{price}</td>
                    <td>{qte}</td>
                    <td>{totale}</td>
                </tr>
            </table>  
        </div>
    )
}