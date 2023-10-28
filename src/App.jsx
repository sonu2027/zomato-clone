import { useState } from "react"
import "./App.css"
import Bookmark from "./context/bookmark"
import CustomRoutes from "./customroutes/CustomRoutes"

function App() {
  const [bookmarks, setBookmarks] = useState([])
  return (
    <Bookmark.Provider value={{ bookmarks, setBookmarks}}>
      <CustomRoutes />
    </Bookmark.Provider>
  )
}

export default App
