import React, { useEffect, useState } from 'react'
import "./AddCuisine.css"
import { useDispatch, useSelector } from 'react-redux'
import { RxCross1 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { setCuisines } from '../../store/cuisinesSlice.js';
import { updateCuisines } from '../../databaseCall/updateCuisine';
import { getCuisines } from '../../databaseCall/getCuisines';
import { useRef } from 'react';

function AddCuisine({ restaurantId, setOpenCuisineTab, openCuisineTab, setShowPopoupForCuisinesUpdated }) {

    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const [cuisinesData, setCuisinesData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentCuisine, setCurrentCuisine] = useState([])

    const cuisine = useSelector((s) => s.cuisines.data)
    console.log("cuisine: ", cuisine);
    const restaurant = useSelector((s) => s.restaurant.data)
    console.log("restaurant: ", restaurant);

    const partnerId = useSelector((s) => s.partner.id)

    const [showWarning, setWarning] = useState("")
    const [focus, setFocus] = useState(0)

    useEffect(() => {

        let found = false
        cuisine.map((e) => {
            if (e.restaurantId == restaurantId) {
                console.log("res found", e.restaurantId);
                found = true
                setCuisinesData(e.cuisines)
                setCurrentCuisine(Object.entries(e.cuisines)[currentIndex])
            }
        })
        if (!found) {
            console.log("not found any cuisines item: ", restaurant, restaurant[0].cuisines);
            let obj = {}
            restaurant.map((elem, ind) => {
                if (restaurantId == elem._id) {
                    restaurant[ind].cuisines.map((e, i) => {
                        obj[restaurant[ind].cuisines[i]] = [{ name: "", price: "" }]
                        setCuisinesData((s) => ({ ...s, [restaurant[ind].cuisines[i]]: [{ name: "", price: "" }] }))
                    })
                }
            })
            setCurrentCuisine(Object.entries(obj)[currentIndex])
        }

    }, [])

    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus()
        }, 333)
    }, [focus])

    const handleFocus = (event) => {
        if (event.key === "Enter") {
            setFocus(focus + 1)
        }
    }

    window.addEventListener("click", () => {
        if (openCuisineTab) {
            setOpenCuisineTab(false)
        }
    })


    const handleName = (event, index) => {
        const newArray = currentCuisine.map((item, i) =>
            i == 1 ? item.map((nestedItem, j) =>
                j === index ? { ...nestedItem, name: event.target.value } : nestedItem
            ) : item
        );

        setCurrentCuisine(newArray);
    };

    const handlePrice = (event, index) => {
        const newArray = currentCuisine.map((item, i) =>
            i === 1 ? item.map((nestedItem, j) =>
                j === index ? { ...nestedItem, price: event.target.value } : nestedItem
            ) : item
        );

        setCurrentCuisine(newArray);
    };


    const handleNext = () => {
        let dontGo = false
        currentCuisine[1].map((e) => {
            if (e.name == "" || e.price == "") {
                dontGo = true
            }
        })
        if (!dontGo) {
            console.log("cuisinesdata is inside: ", cuisinesData);
            console.log("currentcuisines is inside: ", currentCuisine);
            console.log("currentIndex is inside: ", currentIndex);
            console.log("Object.entries(cuisinesData)[currentIndex + 1]: ", Object.entries(cuisinesData)[currentIndex + 1]);
            setCurrentCuisine(Object.entries(cuisinesData)[currentIndex + 1])
            setCurrentIndex(currentIndex + 1)
            setCuisinesData((s) => ({ ...s, [currentCuisine[0]]: currentCuisine[1] }))
            setFocus(0)
        }
        else {
            setWarning("Input field should not be empty")
            setTimeout(() => {
                setWarning("")
            }, 2000)
        }
    }


    const handlePrev = () => {
        let dontGo = false
        currentCuisine[1].map((e) => {
            if (e.name == "" || e.price == "") {
                dontGo = true
            }
        })
        if (!dontGo) {
            console.log("Object.entries(cuisinesData): ", Object.entries(cuisinesData));
            console.log("Object.entries(cuisinesData)[currentIndex - 1]: ", Object.entries(cuisinesData)[currentIndex - 1]);
            console.log("currentIndex: ", currentIndex);
            setCurrentIndex(currentIndex - 1)
            setCurrentCuisine(Object.entries(cuisinesData)[currentIndex - 1])
            setFocus(0)
        }
        else {
            setWarning("Input field should not be empty")
            setTimeout(() => {
                setWarning("")
            }, 2000)
        }
    }

    const handleAddItems = () => {
        const newArray = currentCuisine.map((item, i) =>
            i === 1 ?
                [...item, { name: "", price: "" }]
                :
                item
        );

        console.log("array is: ", newArray);
        console.log("cuisineData:", cuisinesData);

        setCurrentCuisine(newArray);
    };


    const handleUpdate = () => {
        let obj = cuisinesData
        obj[currentCuisine[0]] = currentCuisine[1]
        setCuisinesData((s) => ({ ...s, [currentCuisine[0]]: currentCuisine[1] }))
        console.log("cuisinedata while ipdt:", cuisinesData);
        updateCuisines(restaurantId, obj, partnerId)
            .then((data) => {
                console.log("data after error handling: ", data);
                getCuisines(partnerId)
                    .then((cuisines) => {
                        console.log("received cuisines are: ", cuisines);
                        dispatch(setCuisines(cuisines))
                        setShowPopoupForCuisinesUpdated([true, "Your cuisines has been updated"])
                        setOpenCuisineTab(false)
                    })
                    .catch((error) => {
                        console.log("error: ", error);
                        setShowPopoupForCuisinesUpdated([true, "Your cuisines updation failed, please try again"])
                    })
            })
            .catch((error) => {
                console.log("Something went wrong while updating cuisines items: ", error);
            })
    }

    const updateCurrentCuisine = (event, index) => {
        if (currentCuisine[1].length > 1) {
            console.log("event , element", event, index, currentCuisine);

            const array = currentCuisine[1].filter((e, i) => i !== index);
            const newArray = [currentCuisine[0], array];

            console.log("array: ", array, newArray);

            setCurrentCuisine(newArray);
        }
    };


    console.log("cuisinedata is outside: ", cuisinesData);
    console.log("currentcuisines is outside: ", currentCuisine);
    console.log("currentindex cuisines: ", Object.entries(cuisinesData));
    console.log("currentIndex and cuisineData.length: ", currentIndex, Object.keys(cuisinesData).length);

    return (
        <div className='AddCuisine'>
            <div onClick={(e) => e.stopPropagation()} className="box1">
                <div className="cross">
                    <RxCross1 onClick={() => {
                        if (openCuisineTab) {
                            setOpenCuisineTab(false)
                        }
                    }} className='cross-icon' />
                </div>
                {
                    currentCuisine.length > 0 &&
                    <>
                        <div className='t1'>
                            <div>{currentCuisine[0]}</div>
                            <IoMdAdd onClick={handleAddItems} />
                        </div>
                        {
                            currentCuisine[1].map((element, index) =>
                                <div key={index} className="t2">
                                    <div className="t2t1">
                                        <div>Items {index + 1}</div>
                                        <MdDeleteOutline onClick={(event) => updateCurrentCuisine(event, index)} />
                                    </div>
                                    <input onFocus={() => setFocus(index * 2)} onKeyDown={handleFocus} ref={focus === index * 2 ? inputRef : null} onChange={(event) => handleName(event, index)} value={element.name} type="text" placeholder='Enter item name' />
                                    <input onFocus={() => setFocus(index * 2 + 1)} onKeyDown={handleFocus} ref={focus === index * 2 + 1 ? inputRef : null} value={element.price} onChange={(event) => handlePrice(event, index)} type="text" name="" id="" placeholder='Price' />
                                </div>
                            )
                        }
                    </>
                }
                <div>{showWarning}</div>
                <div className="button2">
                    <button disabled={currentIndex == 0} onClick={handlePrev}>Prev</button>
                    {
                        currentIndex + 1 !== Object.keys(cuisinesData).length ?
                            <button disabled={currentIndex === Object.keys(cuisinesData).length} onClick={handleNext}>Next</button> :
                            <button onClick={handleUpdate}>Update</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default AddCuisine