function AboutProductListing(props) {
    return (
        <>
            <img src={props.image} alt="Image" />
            <div className="shop-details">
                <div className="aboutshop">
                    <span>{props.shopName}</span>
                    <div style={{ color: "rgb(105, 105, 105)" }}>{props.aboutShop}</div>
                    <div>{props.address || null}</div>
                </div>
                <div className="rating">
                    <div>{`${props.rating}★`}</div>
                    <div>{`${props.rating}★`}</div>
                </div>
            </div>
        </>
    )
}

export default AboutProductListing