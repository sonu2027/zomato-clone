function Item1(props) {
    return (
        <>
            <div className="item1">
                <div style={{ fontSize: "1.1rem", color: "rgb(35, 35, 35)" }}>{props.shopName}</div>
                <div style={{ fontSize: "0.9rem", color: "gray" }}>{props.aboutShop ? `${props.aboutShop.slice(0, 18)}...` : ''}</div>
                <div style={{ fontSize: "0.9rem", color: "gray" }}>{props.address || null}</div>
            </div>
        </>
    )
}

export default Item1