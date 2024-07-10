import { useEffect, useState } from "react"
import "./App.css"
import openSearch from "./context/openSearch"
import CustomRoutes from "./customroutes/CustomRoutes"
import ApplyFilter from "./context/applyFilter"
import { getAllRes } from "./databaseCall/getAllRes.js"
import { useDispatch } from "react-redux"
import { setAllRes } from "./store/allRestaurantSlice.js"
import { getAllCuisines } from "./databaseCall/getAllCuisines.js"
import { setAllCuisines } from "./store/allCuisinesSlice.js"

function App() {
  const dispatch = useDispatch()
  const [searchBox, setSearchBox] = useState()

  const [rangeVal, setRangeVal] = useState(0)
  const [range, setRange] = useState(0)

  const [costVal, setCostVal] = useState(0)
  const [price, setPrice] = useState(0)

  const [selectSort, setSelectSort] = useState("Popularity")
  const [apply, setApply] = useState(false)
  const [toApply, setToApply] = useState(["Popularity", range, price])
  const [countFilter, setCountFilter] = useState(0)

  useEffect(() => {
    getAllRes()
      .then((data) => {
        dispatch(setAllRes(data))
        return data
      })
      .then((data) => {
        getAllCuisines()
          .then((data) => {
            dispatch(setAllCuisines(data))
          })
          .catch(() => {

          })
      })
      .catch((error) => {
        console.log("error is: ", error);
      })
  }, [])

  return (
    <ApplyFilter.Provider value={{ apply, setApply, toApply, setToApply, rangeVal, setRangeVal, range, setRange, costVal, setCostVal, price, setPrice, selectSort, setSelectSort, countFilter, setCountFilter }}>
      <openSearch.Provider value={{ searchBox, setSearchBox }}>
        <CustomRoutes />
      </openSearch.Provider>
    </ApplyFilter.Provider>
  )
}

export default App
