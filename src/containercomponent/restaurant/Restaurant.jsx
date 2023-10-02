import "./Restaurant.css"

import img0 from "../../assets/restaurant/amburi.avif"
import img1 from "../../assets/restaurant/burgerMania.avif"
import img2 from "../../assets/restaurant/chennaiSquare.avif"
import img3 from "../../assets/restaurant/dominoPizza.avif"
import img4 from "../../assets/restaurant/kwalityWall.avif"
import img5 from "../../assets/restaurant/hajiSaheb.avif"
import img6 from "../../assets/restaurant/jaduKadai.avif"
import img7 from "../../assets/restaurant/sanghai.avif"
import img8 from "../../assets/restaurant/wowMomo.avif"
import RestaurantList from "../../component/restaurantlist/RestaurantList"

function Restaurant(){
    const img=[img0,img1,img2,img3,img4,img5,img6,img7,img8]
    return(
       <>
       <div id="restaurant-image-main-div">
       <span>Best Food in Kolkata</span>
        <div className="restaurant-image">
        {
            img.map((e,i)=><RestaurantList key={e} image={img[i]}/>)
        }
        </div>
        </div>
       </>
    )
}
export default Restaurant