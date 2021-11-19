import './index.css'

export const Navigation = ( navItems ) => {

    let itemList
    navItems.foreach( navItem => itemList += <li>{navItem.title}</li>)
    return(
        <header>
            <img src="" alt="logo"/>
            <ul>
                {itemList}
            </ul>
        </header>

    )
}