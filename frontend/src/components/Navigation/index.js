import './index.css'

export const Navigation = ( navItems ) => {

    return(
        <header>
            <img src="" alt="logo"/>
            <ul>
                <li><a href="http://localhost:3000/produit">Boutique</a></li>
                <li><a href="http://localhost:3000/produits">Fiche produit</a></li>
                <li><a href="http://localhost:3000/compte">Compte</a></li>
                <li><a href="http://localhost:3000/cguv">CGUV</a></li>
                <li><a href="http://localhost:3000/connexion">Connexion</a></li>
                <li><a href="http://localhost:3000/panier">Panier</a></li>
            </ul>
        </header>

    )
}