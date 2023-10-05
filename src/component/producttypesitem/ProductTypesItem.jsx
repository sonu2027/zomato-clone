import "./ProductTypesItem.css"
function ProductTypesItem({product, img, time}){
    return(
        <div className="product-type">
        <img src={img} alt="Image" />
        <div style={{textAlign:"center"}}>{product} </div>
       <div> {time}</div>
        </div>
    )
}
export default ProductTypesItem