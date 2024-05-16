import React, { useState } from "react";
import "./createRestaurant.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setResDetail } from "../../store/restaurantSlice";

function CreateRestaurant() {

  const dispatch = useDispatch()
  const ownerId = useSelector((s) => s.partner.id)

  const navigate = useNavigate()

  const [openingDayCount, setOpeningDayCount] = useState([]);
  const [describeRestaurant, setDescribeRestaurant] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [resType, setResType] = useState("");
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
    setResType(e.target.attributes.id.nodeValue);
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
      navigate("/partner/home")
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
    const data = await response.json()
    console.log("response data: ", data);
    if (response.ok) {
      dispatch(setResDetail({
        resId: data.response._id,
        resName: data.response.restaurant_name,
        address: data.response.restaurant_complete_address,
        location: data.response.restaurant_location,
        resMobNo: data.response.mobile_number_at_restaurant,
        landline_number: data.response.landline_number,
        restaurant_type: data.response.restaurant_type,
        describe_restaurant: data.response.describe_restaurant,
        cuisines: data.response.cuisines,
        hour: data.response.restaurant_hour,
        day: data.response.restaurant_day,
        menu_URL: data.response.restaurant_menu_URL,
        menu_public_id: data.response.restaurant_menu_public_id,
        image_URL: data.response.restaurant_image_URL,
        image_public_id: data.response.restaurant_image_public_id,
        food_image__URL: data.response.restaurant_food_image__URL,
        food_image__public_id: data.response.restaurant_food_image__public_id,
        ownerId: data.response.ownerId,
      }))
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
      <div>Restaurant details</div>
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
      <input
        onChange={handleResType}
        type="radio"
        name=""
        id="Delivery"
      />
      <label htmlFor="Delivery">Delivery</label>
      <input
        onChange={handleResType}
        type="radio"
        name=""
        id="Dine-in"
      />
      <label htmlFor="Dine-in only">Dine-in</label>
      <input
        onChange={handleResType}
        type="radio"
        name=""
        id="Nightlife "
      />
      <label htmlFor="Nightlife">Nightlife</label>
      <input
        onChange={handleResType}
        type="radio"
        name=""
        id="All"
      />
      <label htmlFor="All">All</label>

      <div className="res-des">
        Select option which best describe your restaurant
      </div>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Bakery"
      />
      <label htmlFor="Bakery">Bakery</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Bar"
      />
      <label htmlFor="Bar">Bar</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Beverage shop"
      />
      <label onChange={handleDescribeRestaurant} htmlFor="Beverage shop">
        Beverage shop
      </label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Bhojanalya"
      />
      <label htmlFor="Bhojanalya">Bhojanalya</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Butcher shop"
      />
      <label htmlFor="Butcher shop">Butcher shop</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Cafe"
      />
      <label htmlFor="Cafe">Cafe</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Casual dining"
      />
      <label htmlFor="Casual dining">Casual dining</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Club"
      />
      <label htmlFor="Club">Club</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Cocktail bar"
      />
      <label htmlFor="Cocktail bar">Cocktail bar</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Confectionery"
      />
      <label htmlFor="Confectionery">Confectionery</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Dessert Parlour"
      />
      <label htmlFor="Dessert Parlour">Dessert Parlour</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Dhaba"
      />
      <label htmlFor="Dhaba">Dhaba</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Fine dining"
      />
      <label htmlFor="Fine dining">Fine dining</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Food court"
      />
      <label htmlFor="Food court">Food court</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Food truck"
      />
      <label htmlFor="Food truck">Food truck</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Kiosk"
      />
      <label htmlFor="Kiosk">Kiosk</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Irani cafe"
      />
      <label htmlFor="Irani cafe">Irani cafe</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Lounge"
      />
      <label htmlFor="Lounge">Lounge</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Mess"
      />
      <label htmlFor="Mess">Mess</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Microbrewery"
      />
      <label htmlFor="Microbrewery">Microbrewery</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Paan shop"
      />
      <label htmlFor="Paan shop">Paan shop</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Pub"
      />
      <label htmlFor="Pub">Pub</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Quick bites"
      />
      <label htmlFor="Quick bites">Quick bites</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Shack"
      />
      <label htmlFor="Shack">Shack</label>
      <input
        onChange={handleDescribeRestaurant}
        type="checkbox"
        name=""
        id="Sweet shop"
      />
      <label htmlFor="Sweet shop">Sweet shop</label>

      <div className="cuisine-type">Types of cuisines</div>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Afghan"
      />
      <label htmlFor="Afghan">Afghan</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="African"
      />
      <label htmlFor="African">African</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="American"
      />
      <label htmlFor="American">American</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Andhra"
      />
      <label htmlFor="Andhra">Andhra</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Arabian"
      />
      <label htmlFor="Arabian">Arabian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Armenian"
      />
      <label htmlFor="Armenian">Armenian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Asian"
      />
      <label htmlFor="Asian">Asian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Asian Fusion"
      />
      <label htmlFor="Asian Fusion">Asian Fusion</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Assamese"
      />
      <label htmlFor="Assamese">Assamese</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Australian"
      />
      <label htmlFor="Australian">Australian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Awadhi"
      />
      <label htmlFor="Awadhi">Awadhi</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Bakery"
      />
      <label htmlFor="Bakery">Bakery</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Bangladeshi"
      />
      <label htmlFor="Bangladeshi">Bangladeshi</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Bar Food"
      />
      <label htmlFor="Bar Food">Bar Food</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="BBQ"
      />
      <label htmlFor="BBQ">BBQ</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Belgian"
      />
      <label htmlFor="Belgian">Belgian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Bengali"
      />
      <label htmlFor="Bengali">Bengali</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Beverages"
      />
      <label htmlFor="Beverages">Beverages</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Bihari"
      />
      <label htmlFor="Bihari">Bihari</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Biryani"
      />
      <label htmlFor="Biryani">Biryani</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Bohri"
      />
      <label htmlFor="Bohri">Bohri</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Brazilian"
      />
      <label htmlFor="Brazilian">Brazilian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="British"
      />
      <label htmlFor="British">British</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Bubble tea"
      />
      <label htmlFor="Bubble tea">Bubble tea</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Burger"
      />
      <label htmlFor="Burger">Burger</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Burmese"
      />
      <label htmlFor="Burmese">Burmese</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Cafe"
      />
      <label htmlFor="Cafe">Cafe</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Cafe food"
      />
      <label htmlFor="Cafe food">Cafe food</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Cake"
      />
      <label htmlFor="Cake">Cake</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Cantonese"
      />
      <label htmlFor="Cantonese">Cantonese</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Charcoal chicken"
      />
      <label htmlFor="Charcoal chicken">Charcoal chicken</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Chettinad"
      />
      <label htmlFor="Chettinad">Chettinad</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Chili"
      />
      <label htmlFor="Chili">Chili</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Chinise"
      />
      <label htmlFor="Chinise">Chinise</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Coffee"
      />
      <label htmlFor="Coffee">Coffee</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Coffee and Tea"
      />
      <label htmlFor="Coffee and Tea">Coffee and Tea</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Continental"
      />
      <label htmlFor="Continental">Continental</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Desserts"
      />
      <label htmlFor="Desserts">Desserts</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Drinks only"
      />
      <label htmlFor="Drinks only">Drinks only</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Egyptian"
      />
      <label htmlFor="Egyptian">Egyptian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Ethiopian"
      />
      <label htmlFor="Ethiopian">Ethiopian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="European"
      />
      <label htmlFor="European">European</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Fast food"
      />
      <label htmlFor="Fast food">Fast food</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Finger food"
      />
      <label htmlFor="Finger food">Finger food</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="French"
      />
      <label htmlFor="French">French</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Fried chicken"
      />
      <label htmlFor="Fried chicken">Fried chicken</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Frozen yogurt"
      />
      <label htmlFor="Frozen yogurt">Frozen yogurt</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Fusion"
      />
      <label htmlFor="Fusion">Fusion</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Garhwali"
      />
      <label htmlFor="Garhwali">Garhwali</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="German"
      />
      <label htmlFor="German">German</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Goan"
      />
      <label htmlFor="Goan">Goan</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Greek"
      />
      <label htmlFor="Greek">Greek</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Grill"
      />
      <label htmlFor="Grill">Grill</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Gujrati"
      />
      <label htmlFor="Gujrati">Gujrati</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Healthy food"
      />
      <label htmlFor="Healthy food">Healthy food</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Himachali"
      />
      <label htmlFor="Himachali">Himachali</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Hot dogs"
      />
      <label htmlFor="Hot dogs">Hot dogs</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Hyderabadi"
      />
      <label htmlFor="Hyderabadi">Hyderabadi</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Ice cream"
      />
      <label htmlFor="Ice cream">Ice cream</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Indian"
      />
      <label htmlFor="Indian">Indian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Indonesian"
      />
      <label htmlFor="Indonesian">Indonesian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Iranian"
      />
      <label htmlFor="Iranian">Iranian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Irish"
      />
      <label htmlFor="Irish">Irish</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Israeli"
      />
      <label htmlFor="Israeli">Israeli</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Italian"
      />
      <label htmlFor="Italian">Italian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Japanese"
      />
      <label htmlFor="Japanese">Japanese</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Juices"
      />
      <label htmlFor="Juices">Juices</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Kashmiri"
      />
      <label htmlFor="Kashmiri">Kashmiri</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Kebab"
      />
      <label htmlFor="Kebab">Kebab</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Kerala"
      />
      <label htmlFor="Kerala">Kerala</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Konkan"
      />
      <label htmlFor="Konkan">Konkan</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Korean"
      />
      <label htmlFor="Korean">Korean</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Lebanese"
      />
      <label htmlFor="Lebanese">Lebanese</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Lucknowi"
      />
      <label htmlFor="Lucknowi">Lucknowi</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Maharastrian"
      />
      <label htmlFor="Maharastrian">Maharastrian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Malaysian"
      />
      <label htmlFor="Malaysian">Malaysian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Malwani"
      />
      <label htmlFor="Malwani">Malwani</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Mandi"
      />
      <label htmlFor="Mandi">Mandi</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Manglorean"
      />
      <label htmlFor="Manglorean">Manglorean</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Meditarranean"
      />
      <label htmlFor="Meditarranean">Meditarranean</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Mexican"
      />
      <label htmlFor="Mexican">Mexican</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Middle eastern"
      />
      <label htmlFor="Middle eastern">Middle eastern</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Mishti"
      />
      <label htmlFor="Mishti">Mishti</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Mithai"
      />
      <label htmlFor="Mithai">Mithai</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Modern Indian"
      />
      <label htmlFor="Modern Indian">Modern Indian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Momos"
      />
      <label htmlFor="Momos">Momos</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Mongolian"
      />
      <label htmlFor="Mongolian">Mongolian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Moroccan"
      />
      <label htmlFor="Moroccan">Moroccan</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Mughlai"
      />
      <label htmlFor="Mughlai">Mughlai</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Naga"
      />
      <label htmlFor="Naga">Naga</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Nepalese"
      />
      <label htmlFor="Nepalese">Nepalese</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="North eastern"
      />
      <label htmlFor="North eastern">North eastern</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="North Indian"
      />
      <label htmlFor="North Indian">North Indian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Odian"
      />
      <label htmlFor="Odian">Odian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Oriental"
      />
      <label htmlFor="Oriental">Oriental</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Paan"
      />
      <label htmlFor="Paan">Paan</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Pakistani"
      />
      <label htmlFor="Pakistani">Pakistani</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Pan Asian"
      />
      <label htmlFor="Pan Asian">Pan Asian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Panini"
      />
      <label htmlFor="Panini">Panini</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Parsi"
      />
      <label htmlFor="Parsi">Parsi</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Peruvian"
      />
      <label htmlFor="Peruvian">Peruvian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Pizza"
      />
      <label htmlFor="Pizza">Pizza</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Poke"
      />
      <label htmlFor="Poke">Poke</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Portuguese"
      />
      <label htmlFor="Portuguese">Portuguese</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Rajasthani"
      />
      <label htmlFor="Rajasthani">Rajasthani</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Raw meats"
      />
      <label htmlFor="Raw meats">Raw meats</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Roast chicken"
      />
      <label htmlFor="Roast chicken">Roast chicken</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Rolls"
      />
      <label htmlFor="Rolls">Rolls</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Russian"
      />
      <label htmlFor="Russian">Russian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Salad"
      />
      <label htmlFor="Salad">Salad</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Sandwich"
      />
      <label htmlFor="Sandwich">Sandwich</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="SeafoodSindhi"
      />
      <label htmlFor="SeafoodSindhi">SeafoodSindhi</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Singaporean"
      />
      <label htmlFor="Singaporean">Singaporean</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="South American"
      />
      <label htmlFor="South American">South American</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="South Indian"
      />
      <label htmlFor="South Indian">South Indian</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Spanish"
      />
      <label htmlFor="Spanish">Spanish</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="ri Lankan"
      />
      <label htmlFor="ri Lankan">Sri Lankan</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Steak"
      />
      <label htmlFor="Steak">Steak</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Street food"
      />
      <label htmlFor="Street food">Street food</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Sushi"
      />
      <label htmlFor="Sushi">Sushi</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Swedish"
      />
      <label htmlFor="Swedish">Swedish</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Tamil"
      />
      <label htmlFor="Tamil">Tamil</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Tea"
      />
      <label htmlFor="Tea">Tea</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Tea-mex"
      />
      <label htmlFor="Tea-mex">Tea-mex</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Thai"
      />
      <label htmlFor="Thai">Thai</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Tibetan"
      />
      <label htmlFor="Tibetan">Tibetan</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Turkish"
      />
      <label htmlFor="Turkish">Turkish</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Vietnamese"
      />
      <label htmlFor="Vietnamese">Vietnamese</label>
      <input
        onChange={handleCuisines}
        type="checkbox"
        name=""
        id="Wraps"
      />
      <label htmlFor="Wraps">Wraps</label>

      <div className="res-timing">Restaurant operarional hour</div>
      {openingDayCount.map((e) => (
        <div key={e}>
          <input type="time" name="restaurant_hour" id="" />
          <input type="time" name="restaurant_hour" id="" />
        </div>
      ))}
      <input
        onChange={handleOpeningDayCount}
        type="checkbox"
        name=""
        id="Monday"
      />
      <label htmlFor="">Monday</label>
      <input
        onChange={handleOpeningDayCount}
        type="checkbox"
        name=""
        id="Tuesday"
      />
      <label htmlFor="">Tuesday</label>
      <input
        onChange={handleOpeningDayCount}
        type="checkbox"
        name=""
        id="Wednesday"
      />
      <label htmlFor="">Wednesday</label>
      <input
        onChange={handleOpeningDayCount}
        type="checkbox"
        name=""
        id="Thursday"
      />
      <label htmlFor="">Thursday</label>
      <input
        onChange={handleOpeningDayCount}
        type="checkbox"
        name=""
        id="Friday"
      />
      <label htmlFor="">Friday</label>
      <input
        onChange={handleOpeningDayCount}
        type="checkbox"
        name=""
        id="Saturday"
      />
      <label htmlFor="">Saturday</label>
      <input
        onChange={handleOpeningDayCount}
        type="checkbox"
        name=""
        id="Sunday"
      />
      <label htmlFor="">Sunday</label>

      <div className="res-img">Upload images</div>
      <label htmlFor="menuImage">Upload menu</label>
      <input
        type="file"
        id="menuImage"
        name="restaurant_menu"
      />

      <label htmlFor="foodImage">Upload food Image</label>
      <input
        type="file"
        id="foodImage"
        name="restaurant_food_image"
      />

      <label htmlFor="resImage">Upload restaurant image</label>
      <input
        type="file"
        id="resImage"
        name="restaurant_image"
      />

      {
        !resRegStatus && <div>Something went wrong, please try again</div>
      }

      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateRestaurant;
