import './index.css';
export const LigneCommande= ({productName, price, urlImage, qte, totale, statut}) => {
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
                    <th>statut</th>
                </tr>
                <tr>
                    <td>{urlImage}</td>
                    <td>{productName}</td>
                    <td>{price}</td>
                    <td>{qte}</td>
                    <td>{totale}</td>
                    <td>{statut}</td>
                </tr>
            </table>  
        </div>
    )
}