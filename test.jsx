import "./Restaurant.css"

import RestaurantList from "../../component/restaurantlist/RestaurantList"
import { useContext, useEffect, useState } from "react"
import applyFilter from "../../context/applyFilter"

function Restaurant({ status, img, shopName, aboutShop, rating, price, time, title, calling, distance, address, inputvalue, bookmarkcontent = false }) {

    // console.log("status: ", status, "img: ", img, "shopNmae:", shopName, "aboutshop:", aboutShop, "Rating:", rating, "price:", price, "time:", time, "title:", title, "calling", calling, "distance:", distance, "address:", address);

    const { apply, toApply } = useContext(applyFilter)
    const [index, setIndex] = useState([])

    useEffect(() => {

        console.log("calling useEffect");
        setIndex([])
        let index1 = []
        let index2 = []
        let index3 = []
        let index2Execution = false
        let index3Execution = false

        // filter for sort by
        if (toApply[0] == "Popularity") {
            rating.map((e, i) => {
                index1.push(i)
            })
        }
        else if (toApply[0] == "Rating: High to Low") {
            let sortRating1 = rating.slice()
            let sortRating2 = rating.slice()
            for (let i = 0; i < sortRating1.length - 1; i++) {
                for (let j = i + 1; j < sortRating1.length; j++) {
                    if (sortRating1[i] < sortRating1[j]) {
                        let temp = sortRating1[i]
                        sortRating1[i] = sortRating1[j];
                        sortRating1[j] = temp
                    }
                }
            }
            sortRating1.map((e, i) => {
                sortRating2.map((ele, ind) => {
                    if (ele == e && ele != -1) {
                        index1.push(ind)
                        sortRating2[ind] = -1;
                    }
                })
            })
        }
        else if (toApply[0] == "Delivery Time" && calling == "delivery") {
            let sortTime1 = time.slice()
            let sortTime2 = time.slice()
            for (let i = 0; i < sortTime1.length - 1; i++) {
                for (let j = i + 1; j < sortTime1.length; j++) {
                    if (sortTime1[i] > sortTime1[j]) {
                        let temp = sortTime1[i]
                        sortTime1[i] = sortTime1[j];
                        sortTime1[j] = temp
                    }
                }
            }
            sortTime1.map((e, i) => {
                sortTime2.map((ele, ind) => {
                    if (ele == e && ele != -1) {
                        index1.push(ind)
                        sortTime2[ind] = -1;
                    }
                })
            })
        }
        else if (toApply[0] == "Cost: High to Low") {
            let sortCost2 = price.slice()
            let sortCost1 = price.slice()
            for (let i = 0; i < sortCost2.length - 1; i++) {
                for (let j = i + 1; j < sortCost2.length; j++) {
                    if (sortCost2[i] < sortCost2[j]) {
                        let temp = sortCost2[i]
                        sortCost2[i] = sortCost2[j];
                        sortCost2[j] = temp
                    }
                }
            }

            sortCost2.map((e, i) => {
                sortCost1.map((ele, ind) => {
                    if (ele == e && ele != -1) {
                        index1.push(ind)
                        sortCost1[ind] = -1;
                    }
                })
            })
        }
        else if (toApply[0] == "Cost: Low to High") {
            let sortCost2 = price.slice()
            let sortCost1 = price.slice()
            for (let i = 0; i < sortCost2.length - 1; i++) {
                for (let j = i + 1; j < sortCost2.length; j++) {
                    if (sortCost2[i] > sortCost2[j]) {
                        let temp = sortCost2[i]
                        sortCost2[i] = sortCost2[j];
                        sortCost2[j] = temp
                    }
                }
            }

            sortCost2.map((e, i) => {
                sortCost1.map((ele, ind) => {
                    if (ele == e && ele != -1) {
                        index1.push(ind)
                        sortCost1[ind] = -1;
                    }
                })
            })
        }
        else {
            if (calling != "delivery") {
                let sortDistance1 = distance.slice()
                let sortDistance2 = distance.slice()
                for (let i = 0; i < sortDistance1.length - 1; i++) {
                    for (let j = i + 1; j < sortDistance1.length; j++) {
                        if (sortDistance1[i] > sortDistance1[j]) {
                            let temp = sortDistance1[i]
                            sortDistance1[i] = sortDistance1[j];
                            sortDistance1[j] = temp
                        }
                    }
                }
                sortDistance1.map((e, i) => {
                    sortDistance2.map((ele, ind) => {
                        if (ele == e && ele != -1) {
                            index1.push(ind)
                            sortDistance2[ind] = -1;
                        }
                    })
                })
            }
            else {
                rating.map((e, i) => {
                    index1.push(i)
                })
            }
        }

        console.log("index1: ", index1);

        if (toApply[1] > 0) {
            index2 = index1.filter((e) => {
                if (rating[e] >= toApply[1]) {
                    return e !== undefined
                }
            })
            index2Execution = true
        }

        console.log("index2: ", index2);

        if (toApply[2] > 0) {
            if (index2.length == 0) {
                index3 = index1.filter((e) => {
                    if (price[e] >= toApply[2]) {
                        return e !== undefined
                    }
                })
            }
            else {
                index3 = index2.filter((e) => {
                    if (price[e] >= toApply[2]) {
                        return e !== undefined
                    }
                })
            }
            index3Execution = true
        }

        console.log("index3: ", index3);

        if (index2.length == 0 && index3.length == 0 && index2Execution == false && index3Execution == false) {
            setIndex((s) => index1.filter((e) => e !== undefined))
        }
        else if (index2.length == 0 && index3.length == 0 && index2Execution == true && index3Execution == true) {
            setIndex([])
        }
        else if (index3.length == 0 && index3Execution == false) {
            setIndex((s) => index2.filter((e) => e !== undefined))

        }
        else if (index3.length == 0 && index3Execution == true) {
            setIndex([])
        }
        else {
            setIndex((s) => index3.filter((e) => e !== undefined))
        }

    }, [toApply])

    console.log("toApply in restaurant: ", toApply);
    console.log("apply in restaurant: ", apply);
    console.log("index useeffect: ", index);

    return (
        <>
            <div id="restaurant-image-main-divs">
                <span>{title}</span>
                <div className="restaurant-image">
                    {
                        apply == false || bookmarkcontent == true ?
                            <>
                                {
                                    calling == "delivery" ?
                                        img.map((e, i) => <RestaurantList
                                            key={e}
                                            image={img[i]}
                                            shopName={shopName[i]}
                                            aboutShop={aboutShop[i]}
                                            rating={rating[i].toFixed(1)}
                                            price={price[i]}
                                            time={time[i]}
                                            calling={calling}
                                            status={status}
                                        />) :
                                        img.map((e, i) => <RestaurantList
                                            key={e}
                                            image={img[i]}
                                            shopName={shopName[i]}
                                            aboutShop={aboutShop[i]}
                                            rating={rating[i].toFixed(1)}
                                            price={price[i]}
                                            calling={calling}
                                            distance={distance[i]}
                                            address={address[i]}
                                            status={status}
                                        />)
                                }
                            </> :
                            <>
                                {
                                    calling == "delivery" ?
                                        index.map((e, i) => <RestaurantList
                                            key={i + 100}
                                            image={img[e]}
                                            shopName={shopName[e]}
                                            aboutShop={aboutShop[e]}
                                            rating={rating[e]}
                                            price={price[e]}
                                            time={time[e]}
                                            calling={calling}
                                            status={status}
                                        />) :
                                        index.map((e, i) => <RestaurantList
                                            key={e}
                                            image={img[e]}
                                            shopName={shopName[e]}
                                            aboutShop={aboutShop[e]}
                                            rating={rating[e]}
                                            price={price[e]}
                                            calling={calling}
                                            distance={distance[e]}
                                            address={address[e]}
                                            status={status}
                                        />)
                                }
                            </>
                    }
                </div>
            </div>
        </>
    )
}
export default Restaurant