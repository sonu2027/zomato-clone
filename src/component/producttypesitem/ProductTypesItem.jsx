import "./ProductTypesItem.css"
function ProductTypesItem({product, img, time}){
    return(
        <div className="product-type">
        <img src={img} alt="Image" />
        {product} 
       <div> {time}</div>
        </div>
    )
}
export default ProductTypesItem