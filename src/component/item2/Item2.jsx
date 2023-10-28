import React from 'react'

function Item2(props) {
    return (
        <>
            <div className="item2">
                <div
                    style={{ fontSize: "0.9rem", color: "#fff", backgroundColor: "#248544", padding: "1px 6px", borderRadius: "6px" }}>
                    {`${props.rating}★`}
                </div>
                {
                    props.time &&
                    <>
                        <div style={{ fontSize: "0.9rem", color: "gray" }}>{`₹${props.price} for one`}</div>
                        <div style={{ fontSize: "0.9rem", color: "gray" }}>{`${props.time || null} min`}</div>
                    </>
                }
                {
                    props.distance &&
                    <>
                        <div style={{ fontSize: "0.9rem", color: "gray" }}>{`₹${props.price} for two`}</div>
                        <div style={{ fontSize: "0.9rem", color: "gray" }}>{`${props.distance || null} km`}</div>
                    </>
                }
            </div>
        </>
    )
}

export default Item2