import "./ProductTypesItem.css"
import { Link } from "react-router-dom"

function ProductTypesItem({ product, img, time, calling = "null", status, aboutProduct, rating }) {
    return (
        <div className="product-type">
            {
                calling == "topbrand" ?
                    <>
                        <Link to={`/login/loggedin?status=${status}&shopName=${product}&aboutShop=${aboutProduct}&rating=${rating}&price=${100}&time=${time}&calling=${"delivery"}&img=${img}`}>
                            <img src={img} alt="Image" />
                        </Link>
                        <div> {`${time} min`}</div>
                    </> :
                    <>
                        <img src={img} alt="Image" />
                    </>
            }
            <div style={{ textAlign: "center" }}>{product} </div>
        </div>
    )
}
export default ProductTypesItem