import './index.css'

export const ImageProduct = ({ src, productName }) => {
    
    return (
        <div className="cropImage">
            <img src={src} alt={productName}/>
        </div>

        )
}