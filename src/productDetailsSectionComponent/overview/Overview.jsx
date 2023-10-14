import "./Overview.css"
function Overview(props) {
    return (
        <>
            <span>About this place</span>
            <div>Cuisines</div>
            <div className="cuisines">
                {
                    props.arr.map((e)=><button key={e}>{e}</button>)
                }
            </div>
        </>
    )
}
export default Overview