import Item1 from "../item1/Item1"
import Item2 from "../item2/Item2"
import "./SearchRestaurantList.css"
import { Link } from "react-router-dom"

function SearchRestaurantList(props) {
    
    return (
        <>
            {
                props.calling == "delivery" ?
                    <div className="restaurant">
                        <Link
                            style={{ textDecoration: "none" }}
                            to={`/login/loggedin?status=${props.status}&shopName=${props.shopName}&aboutShop=${props.aboutShop}&rating=${props.rating}&price=${props.price}&time=${props.time}&calling=${props.calling}&img=${props.image}`}
                        >
                            <img src={props.image} alt="Image" />
                            <div className="item-parent">
                                <Item1
                                    shopName={props.shopName}
                                    aboutShop={props.aboutShop}
                                />
                                <Item2
                                    rating={props.rating}
                                    price={props.price} time={props.time}
                                />
                            </div>
                        </Link>
                    </div>
                    :

                    <>
                        {
                            props.calling == "dining-out" ?
                                <>
                                    <div className="restaurant">
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            to={`/login/loggedin?status=${props.status}&shopName=${props.shopName}&aboutShop=${props.aboutShop}&rating=${props.rating}&price=${props.price}&distance=${props.distance}&calling=${props.calling}&address=${props.address}&img=${props.image}`}
                                        >
                                            <img src={props.image} alt="Image" />
                                            <div className="item-parent">
                                                <Item1
                                                    shopName={props.shopName}
                                                    aboutShop={props.aboutShop}
                                                    address={props.address}
                                                />
                                                <Item2
                                                    rating={props.rating}
                                                    price={props.price}
                                                    distance={props.distance}
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </> :
                                <>
                                    <div className="restaurant">
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            to={`/login/loggedin?status=${props.status}&shopName=${props.shopName}&aboutShop=${props.aboutShop}&rating=${props.rating}&price=${props.price}&distance=${props.distance}&calling=${props.calling}&address=${props.address}&img=${props.image}`}
                                        >
                                            <img src={props.image} alt="Image" />
                                            <div className="item-parent">
                                                <Item1
                                                    shopName={props.shopName}
                                                    aboutShop={props.aboutShop}
                                                    address={props.address}
                                                />
                                                <Item2
                                                    rating={props.rating}
                                                    price={props.price}
                                                    distance={props.distance}
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                </>
                        }
                    </>

            }
        </>
    )
}
export default SearchRestaurantList