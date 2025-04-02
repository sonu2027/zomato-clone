import React, { useEffect, useState } from "react";
import "./createRestaurant.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setResDetail } from "../../store/restaurantSlice";
import { useLocation } from "react-router-dom";
import { setPartnerDetail } from "../../store/partnerSlice";
import { restaurantRegistration } from "../../databaseCall/restaurant.register.js";
import { addRestaurantToPartner } from "../../databaseCall/addRestaurant.Partner.js";
import { partnerRestaurant } from "../../databaseCall/get.partner.restaurant.js";
import { deleteRestaurant } from "../../databaseCall/restaurant.delete.js";
import { updateRestaurant } from "../../databaseCall/restaurant.update.js";

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

  // const [trackResSection, setTrackSection] = useState(0)

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

  const handleRegistration = async (e) => {
    restaurantRegistration(e, openingDayCount, describeRestaurant, cuisines, resType, ownerId)
      .then((resId) => {
        addRestaurantToPartner(ownerId, resId)
          .then((obj) => {
            if (obj.added == false) {
              deleteRestaurant(obj.resId)
            }
            else {
              const newRestaurantId = [...restaurantId, resId];
              console.log("new restaurant are: ", newRestaurantId);
              dispatch(
                setPartnerDetail({
                  fullName: fullName,
                  email: email,
                  ppURL: ppURL,
                  ppPub_id: ppPub_id,
                  id: ownerId,
                  restaurantId: newRestaurantId,
                })
              );
              return newRestaurantId
            }
          })
          .then((newRestaurantId) => {
            partnerRestaurant(newRestaurantId)
              .then((data) => {
                dispatch(setResDetail(data));
                navigate("/partner/home");
              })
          })
          .catch((error) => {
            deleteRestaurant(obj.resId)
            console.log("Restaurant doesn't added: ", error);
          })
      })
      .catch((error) => {
        console.log("Restaurant registration failed: ", error)
        setResRegStatus(false);
        setTimeout(() => {
          setResRegStatus(true);
        }, 3000);
      })
  };

  console.log("Opening day count: ", openingDayCount);
  console.log("des res: ", describeRestaurant);
  console.log("received ownerid is is: ", ownerId);

  const handleUpdateRestaurant = (e) => {
    updateRestaurant(e, openingDayCount,
      describeRestaurant,
      cuisines,
      resType,
      ownerId,
      restaurantData.data
    )
      .then((acknowledged) => {
        partnerRestaurant(restaurantId)
          .then(restaurant => {
            console.log("Restaurant: ", restaurant);
            dispatch(setResDetail(restaurant))
            navigate("/partner/home/restaurant")
          })
      })
      .catch((error) => {
        console.log("Error while updating the restaurant: ", error);
      })
  }

  return (
    <form
      onSubmit={restaurantData ? handleUpdateRestaurant : handleRegistration}
      encType="multipart/form-data"
      className="CreateRestaurant"
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
      }}
    >
      <h2 style={{
        color: "#ef4f5f",
        marginBottom: "2rem",
        textAlign: "center",
        fontSize: "1.8rem",
        fontWeight: "600"
      }}>
        {restaurantData ? "Update Restaurant" : "Register Your Restaurant"}
      </h2>

      {/* Restaurant Information Section */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 className="section-title" style={{
          color: "#333",
          fontSize: "1.3rem",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "2px solid #ef4f5f"
        }}>
          Restaurant Information
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem"
        }}>
          {[
            { placeholder: "Restaurant name", name: "restaurant_name" },
            { placeholder: "Restaurant complete address", name: "restaurant_complete_address" },
            { placeholder: "Restaurant location", name: "restaurant_location" },
            { placeholder: "Mobile number at restaurant", name: "mobile_number_at_restaurant" },
            { placeholder: "Landline number", name: "landline_number" }
          ].map((field) => (
            <input
              defaultValue={restaurantData ? restaurantData.data[field.name] : ""}
              key={field.name}
              type="text"
              placeholder={field.placeholder}
              name={field.name}
              style={{
                padding: "0.8rem",
                border: "1px solid #ddd",
                borderRadius: "6px",
                fontSize: "1rem",
                transition: "border 0.3s",
                outline: "none"
              }}
            />
          ))}
        </div>
      </div>

      {/* Restaurant Type Section */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 className="section-title" style={{
          color: "#333",
          fontSize: "1.3rem",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "2px solid #ef4f5f"
        }}>
          Restaurant Type
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem"
        }}>
          {restaurantTypes.map(e => (
            <div key={e} style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <input
                defaultChecked={restaurantData ? restaurantData.data.restaurant_type.includes(e) : false}
                onChange={handleResType}
                type="checkbox"
                id={`${e}`}
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  accentColor: "#ef4f5f"
                }}
              />
              <label htmlFor={`${e}`} style={{ fontSize: "1rem" }}>{e}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurant Description Section */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 className="section-title" style={{
          color: "#333",
          fontSize: "1.3rem",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "2px solid #ef4f5f"
        }}>
          Describe Your Restaurant
        </h3>
        <p style={{ color: "#666", marginBottom: "1rem" }}>
          Select option which best describe your restaurant
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem"
        }}>
          {restaurantItemTypes.map(e => (
            <div key={e} style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <input
                defaultChecked={
                  restaurantData?.data?.describe_restaurant?.[0]
                    .split(",")
                    .some(item => item.trim() === e.trim())
                }
                onChange={handleDescribeRestaurant}
                type="checkbox"
                id={`${e}`}
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  accentColor: "#ef4f5f"
                }}
              />
              <label htmlFor={`${e}`} style={{ fontSize: "1rem" }}>{e}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Cuisine Types Section */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 className="section-title" style={{
          color: "#333",
          fontSize: "1.3rem",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "2px solid #ef4f5f"
        }}>
          Types of Cuisines
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem"
        }}>
          {cuisinesList.map(e => (
            <div key={e} style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem"
            }}>
              <input
                defaultChecked={restaurantData?.data?.cuisines?.includes(e)}
                onChange={handleCuisines}
                type="checkbox"
                id={`${e}`}
                style={{
                  width: "1.2rem",
                  height: "1.2rem",
                  accentColor: "#ef4f5f"
                }}
              />
              <label htmlFor={`${e}`} style={{ fontSize: "1rem" }}>{e}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Hours Section */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 className="section-title" style={{
          color: "#333",
          fontSize: "1.3rem",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "2px solid #ef4f5f"
        }}>
          Operational Hours
        </h3>
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ color: "#666", marginBottom: "1rem" }}>
            Select days your restaurant is open:
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "1rem",
            marginBottom: "1.5rem"
          }}>
            {restaurantOpeningDay.map(e => (
              <div key={e} style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                <input
                  onChange={handleOpeningDayCount}
                  type="checkbox"
                  id={`${e}`}
                  style={{
                    width: "1.2rem",
                    height: "1.2rem",
                    accentColor: "#ef4f5f"
                  }}
                />
                <label htmlFor={`${e}`} style={{ fontSize: "1rem" }}>{e}</label>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem"
        }}>
          {openingDayCount.map((e, i) => (
            <div key={e} style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem"
            }}>
              <input
                type="time"
                name="restaurant_hour"
                style={{
                  padding: "0.5rem",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "1rem"
                }}
              />
              <span style={{ color: "#666" }}>to</span>
              <input
                type="time"
                name="restaurant_hour"
                style={{
                  padding: "0.5rem",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "1rem"
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Upload Section */}
      <div style={{ marginBottom: "2rem" }}>
        <h3 className="section-title" style={{
          color: "#333",
          fontSize: "1.3rem",
          marginBottom: "1rem",
          paddingBottom: "0.5rem",
          borderBottom: "2px solid #ef4f5f"
        }}>
          Upload Images
        </h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem"
        }}>
          {[
            { id: "menuImage", label: "Upload Menu", name: "restaurant_menu", index: 0 },
            { id: "foodImage", label: "Upload Food Image", name: "restaurant_food_image", index: 1 },
            { id: "resImage", label: "Upload Restaurant Image", name: "restaurant_image", index: 2 }
          ].map((file) => (
            <div key={file.id}>
              <label
                className="CreateRestaurant restaurantImage"
                htmlFor={file.id}
                style={{
                  display: "block",
                  border: "2px dashed #ddd",
                  padding: "1.5rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  backgroundColor: "#f9f9f9"
                }}
              >
                <div style={{ fontSize: "3rem", color: "#ccc", marginBottom: "0.5rem" }}>+</div>
                <div style={{ color: "#666", fontWeight: "500" }}>{file.label}</div>
              </label>
              <input
                onChange={(e) => {
                  document.getElementsByClassName("CreateRestaurant restaurantImage")[file.index].style.backgroundColor = "#ef4f5f";
                  document.getElementsByClassName("CreateRestaurant restaurantImage")[file.index].style.color = "#fff";
                  document.getElementsByClassName("CreateRestaurant restaurantImage")[file.index].style.borderColor = "#ef4f5f";
                }}
                style={{ display: "none" }}
                type="file"
                id={file.id}
                name={file.name}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Error Message */}
      {!resRegStatus && (
        <div style={{
          color: "#ef4f5f",
          backgroundColor: "#feecec",
          padding: "1rem",
          borderRadius: "6px",
          marginBottom: "1.5rem",
          textAlign: "center"
        }}>
          Something went wrong, please try again
        </div>
      )}

      {/* Submit Button */}
      <div style={{ textAlign: "center" }}>
        <button
          type="submit"
          style={{
            padding: "0.8rem 2rem",
            backgroundColor: "#ef4f5f",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.3s",
            width: "100%",
            maxWidth: "300px"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#d84351"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#ef4f5f"}
        >
          {restaurantData ? "Update Restaurant" : "Register Restaurant"}
        </button>
      </div>
    </form>
  );
}

export default CreateRestaurant;
