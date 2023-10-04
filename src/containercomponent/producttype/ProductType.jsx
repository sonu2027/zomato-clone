import ProductTypesItem from "../../component/producttypesitem/ProductTypesItem"
import "./ProductTypes.css"

import img0 from "../../assets/productTypesAssets/pizza.avif"
import img1 from "../../assets/productTypesAssets/biryani.avif"
import img2 from "../../assets/productTypesAssets/burger.avif"
import img3 from "../../assets/productTypesAssets/cake.avif"
import img4 from "../../assets/productTypesAssets/rolls.avif"
import img5 from "../../assets/productTypesAssets/momos.avif"
import img6 from "../../assets/productTypesAssets/chicken.webp"
import img7 from "../../assets/productTypesAssets/northIndian.avif"
import img8 from "../../assets/productTypesAssets/thali.avif"
import img9 from "../../assets/productTypesAssets/chowmein.avif"
import img10 from "../../assets/productTypesAssets/paneer.avif"
import img11 from "../../assets/productTypesAssets/dosa.avif"

function ProductType() {
    const productType = ["Pizza","Biryani", "Burger", "Cake", "Rolls", "Momos", "Chicken", "North Indian", "Thali", "Chowmein", "Paneer", "Dosa"]
    const productTypeImage = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]
    return (
        <div id="each-project-main-div" >
            <span>Inspiration for your first order</span>
            <div className="each-product">
                {productType.map((e, i) => <ProductTypesItem key={e} product={e} img={productTypeImage[i]} />)}
            </div>
        </div>
    )
}
export default ProductType