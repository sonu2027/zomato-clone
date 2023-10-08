import "./Filter.css"
import f1 from "../../assets/filters/filter.jpg"
function Filter() {
    return (
        <div className="filter-parent">
            <button className="filter">
                <img src={f1} alt="" />
                <div>Filters</div>
            </button>
            <button className="filter">
                Rating: 4.0+
            </button>
            <button className="filter">
                Pure Veg
            </button>
            <button className="filter">
                Cuisines
                <select name="" id=""></select>
            </button>
        </div>
    )
}

export default Filter