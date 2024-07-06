// importing css
import "./SearchRestaurantList.css"

// importing components
import Item1 from "../item1/Item1"
import Item2 from "../item2/Item2"
import { Link } from "react-router-dom"

// importing hooks
import { useContext } from "react"

// importing context api
import openSearch from "../../context/openSearch"

function SearchRestaurantList(props) {

    const { searchBox, setSearchBox } = useContext(openSearch)

    console.log('PROPS: ', props);

    return (
        <>
            {
                props.calling == "delivery" ?
                    <div onClick={() => setSearchBox(false)} className="restaurant">
                        <Link
                            style={{ textDecoration: "none" }}
                            to={`/login/loggedin?status=${props.status}&shopName=${props.shopName}&aboutShop=${props.cuisines}&rating=${props.rating}&price=${props.price}&time=${props.time}&calling=${props.calling}&img=${props.image}&id=${props.id}`}
                        >
                            <img src={props.image} alt="Image" />
                            <div className="item-parent">
                                <Item1
                                    shopName={props.shopName}
                                    aboutShop={props.cuisines}
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
                                    <div onClick={() => setSearchBox(false)} className="restaurant">
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            to={`/login/loggedin?status=${props.status}&shopName=${props.shopName}&aboutShop=${props.cuisines}&rating=${props.rating}&price=${props.price}&distance=${props.distance}&calling=${props.calling}&address=${props.address}&img=${props.image}&id=${props.id}`}
                                        >
                                            <img src={props.image} alt="Image" />
                                            <div className="item-parent">
                                                <Item1
                                                    shopName={props.shopName}
                                                    aboutShop={props.cuisines}
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
                                    <div onClick={() => setSearchBox(false)} className="restaurant">
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            to={`/login/loggedin?status=${props.status}&shopName=${props.shopName}&aboutShop=${props.cuisines}&rating=${props.rating}&price=${props.price}&distance=${props.distance}&calling=${props.calling}&address=${props.address}&img=${props.image}&id=${props.id}`}
                                        >
                                            <img src={props.image} alt="Image" />
                                            <div className="item-parent">
                                                <Item1
                                                    shopName={props.shopName}
                                                    aboutShop={props.cuisines}
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