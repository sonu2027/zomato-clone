import ProductTypesItem from "../../component/producttypesitem/ProductTypesItem"
import "../producttype/ProductTypes.css"
import useTopBrandAsset from "../../hooks/useTopBrandAsset"

function TopBrand(props) {

    const topBrandAsset = useTopBrandAsset()
    return (
        <div id="each-project-main-div" style={{ backgroundColor: "#fff" }}>
            <span>Top brands for you</span>
            <div className="each-product">
                {topBrandAsset.productType.map((e, i) => <ProductTypesItem key={e} product={e} img={topBrandAsset.productTypeImage[i]} time={topBrandAsset.time[i]} calling="topbrand" status={props.status} aboutProduct={topBrandAsset.aboutProduct[i]} rating={topBrandAsset.rating[i]} />)}
            </div>
        </div>
    )
}
export default TopBrand