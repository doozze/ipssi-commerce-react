import './index.css'
import {useAPIContext} from "../../contexts/APIContext";
import {useEffect} from "react";

export const Navigation = () => {

    const {idProduit, setProduit} = useAPIContext();
    const pathProduit = 'http://localhost:3000/produit/' + idProduit;

    useEffect(()=> {},[idProduit]);

    return(
        <nav>
            <a href="http://localhost:3000/"><img src="" alt="logo"/></a>
            <ul>
                <li><a href="http://localhost:3000/boutique">Boutique</a></li>
                <li><a href={pathProduit}>Fiche produit</a></li>
                <li><a href="http://localhost:3000/compte">Compte</a></li>
                <li><a href="http://localhost:3000/cguv">CGUV</a></li>
                <li><a href="http://localhost:3000/connexion">Connexion</a></li>
                <li><a href="http://localhost:3000/panier">Panier</a></li>
            </ul>
        </nav>

    )
}