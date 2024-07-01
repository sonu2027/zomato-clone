import React, { useEffect, useState } from 'react'
import "./AddCuisine.css"
import { useDispatch, useSelector } from 'react-redux'
import { RxCross1 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import cuisinesSlice, { setCuisines } from '../../store/cuisinesSlice';
import { updateCuisines } from '../../databaseCall/updateCuisine';
import { getCuisines } from '../../databaseCall/getCuisines';
import { useRef } from 'react';

function AddCuisine({ restaurantId, setOpenCuisineTab, openCuisineTab }) {

    const dispatch = useDispatch()
    const inputRef = useRef(null)

    const [cuisinesData, setCuisinesData] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [currentCuisine, setCurrentCuisine] = useState([])
    const restaurantCuisinesTypes = useSelector((s) => s.cuisines.data)
    console.log("restaurantCuisines: ", restaurantCuisinesTypes);
    const restaurantCuisines = useSelector((s) => s.restaurant.data)
    console.log("resdet: ", restaurantCuisines);
    const partnerId = useSelector((s) => s.partner.id)

    const [showWarning, setWarning] = useState("")
    const [focus, setFocus] = useState(0)

    useEffect(() => {

        console.log("given data: ", restaurantId, setOpenCuisineTab, openCuisineTab);

        let found = false
        restaurantCuisinesTypes.map((e) => {
            if (e.restaurantId == restaurantId) {
                console.log("res found", e.restaurantId);
                found = true
                setCuisinesData(e.cuisines)
                setCurrentCuisine(Object.entries(e.cuisines)[currentIndex])
            }
        })
        if (!found) {
            console.log("not found any cuisines item: ", restaurantCuisines, restaurantCuisines[0].cuisines);
            let obj = {}
            restaurantCuisines.map((elem, ind) => {
                if (restaurantId == elem._id) {
                    restaurantCuisines[ind].cuisines.map((e, i) => {
                        obj[restaurantCuisines[ind].cuisines[i]] = [{ name: "", price: "" }]
                        setCuisinesData((s) => ({ ...s, [restaurantCuisines[ind].cuisines[i]]: [{ name: "", price: "" }] }))
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
        let array = [...currentCuisine]
        array[1][index].name = event.target.value
        setCurrentCuisine(array)
    }

    const handlePrice = (event, index) => {
        let array = [...currentCuisine]
        array[1][index].price = event.target.value
        setCurrentCuisine(array)
    }

    const handleNext = () => {
        let dontGo = false
        currentCuisine[1].map((e) => {
            if (e.name == "" || e.price == "") {
                dontGo = true
            }
        })
        if (!dontGo) {
            setCurrentCuisine(Object.entries(cuisinesData)[currentIndex + 1])
            setCurrentIndex(currentIndex + 1)
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
            setCurrentCuisine(Object.entries(cuisinesData)[currentIndex - 1])
            setCurrentIndex(currentIndex - 1)
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
        let array = [...currentCuisine]
        console.log("array is: ", array);
        console.log("cuisineData:", cuisinesData);
        array[1].push({ name: "", price: "" })
        console.log("array is: ", array);
        console.log("cuisineData:", cuisinesData);
        setCurrentCuisine(array)

        // let obj = { ...cuisinesData }
        // console.log("obj: ", obj, Object.keys(obj), Object.values(obj));
        // console.log("obj[currentIndex] is: ", Object.keys(obj)[currentIndex]);
        // // Object.keys(obj)[currentIndex] = array
        // console.log("obj is: ", obj);
        // setCuisinesData(obj)
    }

    const handleUpdate = () => {
        console.log("cuisinedata while ipdt:", cuisinesData);
        updateCuisines(restaurantId, cuisinesData, partnerId)
            .then((data) => {
                console.log("data after error handling: ", data);
                getCuisines(partnerId)
                    .then((cuisines) => {
                        console.log("received cuisines are: ", cuisines);
                        dispatch(setCuisines(cuisines))
                    })
                    .catch((error) => {
                        console.log("error: ", error);
                    })
            })
            .catch((error) => {
                console.log("Something went wrong while updating cuisines items: ", error);
            })
    }

    const updateCurrentCuisine = (event, index) => {
        if (currentCuisine[1].length > 1) {
            console.log("event , element", event, index, currentCuisine);
            let array = currentCuisine[1].filter((e, i) => i != index)
            let newArray = [currentCuisine[0], array]
            console.log("array: ", array, newArray);
            setCurrentCuisine([currentCuisine[0], array])
            console.log("cuisinedata: ", cuisinesData);

            let obj = Object.entries(cuisinesData)
            obj[currentIndex] = newArray
            console.log("obj is: ", obj);
            setCuisinesData(obj)
        }
    }


    console.log("cuisinedata is: ", cuisinesData);
    console.log("currentcuisines is: ", currentCuisine);
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