import { useState } from "react"
import "./App.css"
import Bookmark from "./context/bookmark"
import openSearch from "./context/openSearch"
import CustomRoutes from "./customroutes/CustomRoutes"

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [searchBox, setSearchBox] = useState()
  return (
    <openSearch.Provider value={{ searchBox, setSearchBox }}>
      <Bookmark.Provider value={{ bookmarks, setBookmarks }}>
        <CustomRoutes />
      </Bookmark.Provider>
    </openSearch.Provider>
  )
}

export default App
