import ProductTypesItem from "../../component/producttypesitem/ProductTypesItem"
import "../producttype/ProductTypes.css"

import img0 from "../../assets/topBrandsAssets/wowmomo.avif"
import img1 from "../../assets/topBrandsAssets/kfc.avif"
import img2 from "../../assets/topBrandsAssets/dominopizza.avif"
import img3 from "../../assets/topBrandsAssets/chowman.webp"
import img4 from "../../assets/topBrandsAssets/kwalitywall.avif"
import img5 from "../../assets/topBrandsAssets/arsalan.avif"
import img6 from "../../assets/topBrandsAssets/burgerking.avif"
import img7 from "../../assets/topBrandsAssets/kasturirestaurant.avif"
import img8 from "../../assets/topBrandsAssets/wowchina.avif"
import img9 from "../../assets/topBrandsAssets/mioamore.avif"

function TopBrand(){

    const productType = ["WOW! Momo", "KFC", "Domino's Pizza", "Chowman", "Kwality Wall’s", "Arsalan", "Burger King", "Kasturi Restaurant", "WOW! China", "Mio Amore"]
    const productTypeImage = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9]
    const time=["12 min", "8 min", "27 min", "35 min", "14 min", "19 min", "22 min", "25 min", "18 min", "13 min"]
    return (
        <div id="each-project-main-div" style={{backgroundColor:"#fff"}}>
            <span>Top brands for you</span>
            <div className="each-product">
                {productType.map((e, i) => <ProductTypesItem key={e} product={e} img={productTypeImage[i]} time={time[i]} />)}
            </div>
        </div>
    )
}
export default TopBrand