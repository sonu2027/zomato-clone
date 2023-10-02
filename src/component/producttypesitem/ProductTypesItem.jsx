import "./ProductTypesItem.css"
function ProductTypesItem({product, img}){
    return(
        <div className="product-type">
        <img src={img} alt="Image" />
        {product}
        </div>
    )
}
export default ProductTypesItem