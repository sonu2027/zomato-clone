import { useState } from "react"
import "./App.css"
import Bookmark from "./context/bookmark"
import openSearch from "./context/openSearch"
import CustomRoutes from "./customroutes/CustomRoutes"
import ApplyFilter from "./context/applyFilter"

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [searchBox, setSearchBox] = useState()

  const [rangeVal, setRangeVal] = useState(0)
  const [range, setRange] = useState(0)

  const [costVal, setCostVal] = useState(0)
  const [price, setPrice] = useState(0)

  const [selectSort, setSelectSort] = useState("Popularity")
  const [apply, setApply] = useState(false)
  const [toApply, setToApply] = useState(["Popularity", range, price])

  return (
    <ApplyFilter.Provider value={{ apply, setApply, toApply, setToApply, rangeVal, setRangeVal, range, setRange, costVal, setCostVal, price, setPrice, selectSort, setSelectSort}}>
      <openSearch.Provider value={{ searchBox, setSearchBox }}>
        <Bookmark.Provider value={{ bookmarks, setBookmarks }}>
          <CustomRoutes />
        </Bookmark.Provider>
      </openSearch.Provider>
    </ApplyFilter.Provider>
  )
}

export default App
