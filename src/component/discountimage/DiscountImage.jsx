import "./DiscountImage.css"
import discountImage from "../../assets/diningout/discount.avif"

function DiscountImage(){
    return(
        <>
        <img className="discount-image" src={discountImage} alt="" />
        </>
    )
}
export default DiscountImage