import React, { useEffect, useState } from "react";
import "./createRestaurant.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setResDetail } from "../../store/restaurantSlice";
import { useLocation } from "react-router-dom";
import { setPartnerDetail } from "../../store/partnerSlice";

function CreateRestaurant() {

  const cuisinesList = [
    "Afghan", "African", "American", "Andhra", "Arabian", "Armenian", "Asian",
    "Asian Fusion", "Assamese", "Australian", "Awadhi", "Bakery", "Bangladeshi",
    "Bar Food", "BBQ", "Belgian", "Bengali", "Beverages", "Bihari", "Biryani",
    "Bohri", "Brazilian", "British", "Bubble tea", "Burger", "Burmese", "Cafe",
    "Cafe food", "Cake", "Cantonese", "Charcoal chicken", "Chettinad", "Chili",
    "Chinise", "Coffee", "Coffee and Tea", "Continental", "Desserts", "Drinks only",
    "Egyptian", "Ethiopian", "European", "Fast food", "Finger food", "French",
    "Fried chicken", "Frozen yogurt", "Fusion", "Garhwali", "German", "Goan",
    "Greek", "Grill", "Gujrati", "Healthy food", "Himachali", "Hot dogs",
    "Hyderabadi", "Ice cream", "Indian", "Indonesian", "Iranian", "Irish",
    "Israeli", "Italian", "Japanese", "Juices", "Kashmiri", "Kebab", "Kerala",
    "Konkan", "Korean", "Lebanese", "Lucknowi", "Maharastrian", "Malaysian",
    "Malwani", "Mandi", "Manglorean", "Mediterranean", "Mexican", "Middle eastern",
    "Mishti", "Mithai", "Modern Indian", "Momos", "Mongolian", "Moroccan",
    "Mughlai", "Naga", "Nepalese", "North eastern", "North Indian", "Odian",
    "Oriental", "Paan", "Pakistani", "Pan Asian", "Panini", "Parsi", "Peruvian",
    "Pizza", "Poke", "Portuguese", "Rajasthani", "Raw meats", "Roast chicken",
    "Rolls", "Russian", "Salad", "Sandwich", "Seafood", "Sindhi", "Singaporean",
    "South American", "South Indian", "Spanish", "Sri Lankan", "Steak", "Street food",
    "Sushi", "Swedish", "Tamil", "Tea", "Tea-mex", "Thai", "Tibetan", "Turkish",
    "Vietnamese"
  ];

  const restaurantItemTypes = [
    "Bakery",
    "Bar",
    "Beverage shop",
    "Bhojanalya",
    "Butcher shop",
    "Cafe",
    "Casual dining",
    "Club",
    "Cocktail bar",
    "Confectionery",
    "Dessert Parlour",
    "Dhaba",
    "Fine dining",
    "Food court",
    "Food truck",
    "Kiosk",
    "Irani cafe",
    "Lounge",
    "Mess",
    "Microbrewery",
    "Paan shop",
    "Pub",
    "Quick bites",
    "Shack",
    "Sweet shop"
  ];

  const restaurantTypes = ["Delivery", "Dinie-in", "Nightlife"]

  const restaurantOpeningDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


  const location = useLocation()
  const restaurantData = location.state
  console.log("restaurantData: ", restaurantData);
  const dispatch = useDispatch()
  const ownerId = useSelector((s) => s.partner.id)
  const restaurantId = useSelector((s) => s.partner.restaurantId)
  const fullName = useSelector((s) => s.partner.fullName)
  const email = useSelector((s) => s.partner.email)
  const ppURL = useSelector((s) => s.partner.ppURL)
  const ppPub_id = useSelector((s) => s.partner.ppPub_id)

  const navigate = useNavigate()

  const [openingDayCount, setOpeningDayCount] = useState([]);
  const [describeRestaurant, setDescribeRestaurant] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [resType, setResType] = useState([]);
  const [resRegStatus, setResRegStatus] = useState(true)

  const handleOpeningDayCount = (e) => {
    console.log("e: ", e);
    console.log("id: ", e.target.attributes.id.nodeValue);
    e.target.checked == true
      ? setOpeningDayCount((s) => [...s, e.target.attributes.id.nodeValue])
      : setOpeningDayCount((s) =>
        s.filter((element) => element != e.target.attributes.id.nodeValue)
      );
  };

  const handleDescribeRestaurant = (e) => {
    console.log("e: ", e);
    console.log("id: ", e.target.attributes.id.nodeValue);
    e.target.checked == true
      ? setDescribeRestaurant((s) => [...s, e.target.attributes.id.nodeValue])
      : setDescribeRestaurant((s) =>
        s.filter((element) => element != e.target.attributes.id.nodeValue)
      );
  };

  const handleCuisines = (e) => {
    console.log("e: ", e);
    console.log("id: ", e.target.attributes.id.nodeValue);
    e.target.checked == true
      ? setCuisines((s) => [...s, e.target.attributes.id.nodeValue])
      : setCuisines((s) =>
        s.filter((element) => element != e.target.attributes.id.nodeValue)
      );
  };

  const handleResType = (e) => {
    console.log("event in res-tpe: ", e);
    console.log("id: ", e.target.attributes.id.nodeValue);
    e.target.checked == true
      ? setResType((s) => [...s, e.target.attributes.id.nodeValue])
      : setResType((s) =>
        s.filter((element) => element != e.target.attributes.id.nodeValue)
      );
  };

  const addRestauarntToPartner = async (resId) => {

    const jsonData = {
      ownerId: ownerId,
      resId: resId
    }

    const response = await fetch("http://localhost:7000/addrestaurant", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    })
    const data = await response.json()
    console.log("data is: ", data);
    if (response.ok) {
      const restaurantIds = [...restaurantId, resId]
      console.log("Restaurant Ids is: ", restaurantIds);
      dispatch(setPartnerDetail({ fullName: fullName, email: email, ppURL: ppURL, ppPub_id: ppPub_id, id: ownerId, restaurantId: [...restaurantId, resId] }))
      const resRes = await fetch("http://localhost:7000/partnerrestaurant", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: restaurantIds })
      })
      console.log("resRes: ", resRes);
      if (resRes.ok) {
        const data = await resRes.json()
        console.log("restaurant find data: ", data);
        dispatch(setResDetail(data))
        navigate("/partner/home")
      }
    }
    else {
      const jsonData = {
        resId: resId
      }
      const response = await fetch("http://localhost:7000/deleterestaurant", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      })
      console.log("response", response);
      const data = await response.json()
      console.log("data: ", data);
    }
  }

  const handleForm = async (e) => {
    e.preventDefault();
    console.log("form event: ", e.target);
    const formData = new FormData(e.target);
    formData.append("restaurant_day", openingDayCount);
    formData.append("describe_restaurant", describeRestaurant);
    formData.append("cuisines", cuisines);
    formData.append("restaurant_type", resType);
    formData.append("ownerId", ownerId);
    const response = await fetch("http://localhost:7000/registerrestaurant", {
      method: "POST",
      body: formData,
    });
    console.log("response: ", response);
    const data = await response.json()
    console.log("response data: ", data);
    if (response.ok) {
      addRestauarntToPartner(data.response._id)
    }
    else {
      setResRegStatus(false)
      setTimeout(() => {
        setResRegStatus(true)
      }, 3000)
    }
  };

  console.log("Opening day count: ", openingDayCount);
  console.log("des res: ", describeRestaurant);
  console.log("received ownerid is is: ", ownerId);

  return (
    <form
      onSubmit={handleForm}
      encType="multipart/form-data"
      className="CreateRestaurant"
    >
      <div>Restaurant Information</div>
      <div className="res-dtl">
        <input
          type="text"
          placeholder="Restaurant name"
          name="restaurant_name"
        />
        <input
          type="text"
          placeholder="Restaurant complete address"
          name="restaurant_complete_address"
        />
        <input
          type="text"
          placeholder="Restaurant location"
          name="restaurant_location"
        />
        <input
          type="text"
          placeholder="Mobile number at restaurant"
          name="mobile_number_at_restaurant"
        />
        <input
          type="text"
          placeholder="Landline number"
          name="landline_number"
        />
      </div>

      <div className="res-type">Restaurant type and timing</div>

      <div className="res-type-option">
        {
          restaurantTypes.map(e =>
            <div key={e} className="item">
              <input
                onChange={handleResType}
                type="checkbox"
                id={`${e}`}
              />
              <label htmlFor={`${e}`}>{e}</label>
            </div>
          )
        }
      </div>

      <div className="res-des">
        Select option which best describe your restaurant
      </div>

      <div className="res-des-option">
        {
          restaurantItemTypes.map(e =>
            <div key={e} className="item">
              <input
                onChange={handleDescribeRestaurant}
                type="checkbox"
                name=""
                id={`${e}`}
              />
              <label htmlFor={`${e}`}>{e}</label>
            </div>
          )
        }
      </div>

      <div className="cuisine-type">Types of cuisines</div>
      <div className="cuisine-type-option">
        {
          cuisinesList.map(e =>
            <div key={e} className="item">
              <input
                onChange={handleCuisines}
                type="checkbox"
                name=""
                id={`${e}`}
              />
              <label htmlFor={`${e}`}>{e}</label>
            </div>
          )
        }
      </div>

      <div className="res-timing">Restaurant operarional hour</div>
      {openingDayCount.map((e, i) => (
        <div key={e}>
          <input type="time" name="restaurant_hour" id="" />
          <input type="time" name="restaurant_hour" id="" />
        </div>
      ))}

      <div className="restaurant-opening-day">
        {
          restaurantOpeningDay.map(e =>
            <div key={e} className="item">
              <input
                onChange={handleOpeningDayCount}
                type="checkbox"
                name=""
                id={`${e}`}
              />
              <label htmlFor={`${e}`}>{e}</label>
            </div>
          )
        }
      </div>

      <div className="res-img">Upload images</div>

      <label
        style={{ border: "1px solid black", padding: "6px 12px", borderRadius: "4px", margin: "4px 0" }}
        htmlFor="menuImage">
        Upload menu
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        id="menuImage"
        name="restaurant_menu" />

      <label
        style={{ border: "1px solid black", padding: "6px 12px", borderRadius: "4px", margin: "4px 0" }}
        htmlFor="foodImage">
        Upload food Image
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        id="foodImage"
        name="restaurant_food_image" />

      <label
        style={{ border: "1px solid black", padding: "6px 12px", borderRadius: "4px", margin: "4px 0" }}
        htmlFor="resImage">
        Upload restaurant image
      </label>
      <input
        style={{ display: "none" }}
        type="file"
        id="resImage"
        name="restaurant_image" />

      {
        !resRegStatus && <div>Something went wrong, please try again</div>
      }

      <button style={{ padding: "8px 16px", margin: "1rem" }} type="submit">Submit</button>
    </form>
  );
}

export default CreateRestaurant;
