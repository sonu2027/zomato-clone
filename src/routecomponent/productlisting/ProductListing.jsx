import { useLocation } from "react-router-dom"
import "./ProductListing.css"
import Header from "../../containercomponent/header/Header";
import { MdOutlineDirections } from "react-icons/md";
import { BsBookmarkPlus } from "react-icons/bs";
import { PiShareFatLight } from "react-icons/pi";
import ProductSection from "../../component/productlistingsectionbutton/ProductSection";
// import { useEffect } from "react";
import { useState } from "react";
import "../homepage/HomePage.css";

import img0 from "../../assets/restaurant/amburi.avif"
import img1 from "../../assets/restaurant/burgerMania.avif"
import img2 from "../../assets/restaurant/chennaiSquare.avif"
import img3 from "../../assets/restaurant/dominoPizza.avif"
import img4 from "../../assets/restaurant/kwalityWall.avif"
import img5 from "../../assets/restaurant/hajiSaheb.avif"
import img6 from "../../assets/restaurant/jaduKadai.avif"
import img7 from "../../assets/restaurant/sanghai.avif"
import img8 from "../../assets/restaurant/wowMomo.avif"
import img9 from "../../assets/restaurant/helloKolkata.avif"
import img10 from "../../assets/restaurant/monginis.avif"
import img11 from "../../assets/restaurant/khanti.avif"
import img12 from "../../assets/restaurant/subway.avif"
import img13 from "../../assets/restaurant/machhliBabaFries.avif"
import img14 from "../../assets/restaurant/teaJunction.avif"
import img15 from "../../assets/restaurant/tewariBrother.avif"
import img16 from "../../assets/restaurant/sharmaSnacks.avif"
import img17 from "../../assets/restaurant/kreamz.avif"

// For night life
import Image0 from "../../assets/nightlife/desilane.avif"
import Image1 from "../../assets/nightlife/quince.avif"
import Image2 from "../../assets/nightlife/moorve.avif"
import Image3 from "../../assets/nightlife/redkitchen.avif"
import Image4 from "../../assets/nightlife/clubaries.avif"
import Image5 from "../../assets/nightlife/one8.avif"
import Image6 from "../../assets/nightlife/effingut.avif"
import Image7 from "../../assets/nightlife/sobasassy.avif"
import Image8 from "../../assets/nightlife/hammer.avif"
import Image9 from "../../assets/nightlife/carpediem.avif"
import Image10 from "../../assets/nightlife/sorano.avif"
import Image11 from "../../assets/nightlife/romaania.avif"
import Image12 from "../../assets/nightlife/oltera.avif"
import Image13 from "../../assets/nightlife/cornercourtyard.avif"
import Image14 from "../../assets/nightlife/hardrock.avif"
import Image15 from "../../assets/nightlife/raasta.avif"
import Image16 from "../../assets/nightlife/octa.avif"
import Image17 from "../../assets/nightlife/vaayu.avif"
import Image18 from "../../assets/nightlife/trincas.avif"
import Image19 from "../../assets/nightlife/bikerscafe.avif"
import Image20 from "../../assets/nightlife/lmnoq.avif"
import Image21 from "../../assets/nightlife/warehouse.avif"
import Image22 from "../../assets/nightlife/barissh.avif"
import Image23 from "../../assets/nightlife/lordsandbarons.avif"
import Image24 from "../../assets/nightlife/veneto.avif"
import Image25 from "../../assets/nightlife/lord.avif"
import Image26 from "../../assets/nightlife/whatsapp.avif"
import Image27 from "../../assets/nightlife/missginko.avif"
import Image28 from "../../assets/nightlife/mainlandchina.avif"
import Image29 from "../../assets/nightlife/flame.webp"
import Image30 from "../../assets/nightlife/jalsa.avif"
import Image31 from "../../assets/nightlife/scrapyard.avif"
import Image32 from "../../assets/nightlife/spicekraft.avif"
import Image33 from "../../assets/nightlife/fridays.avif"
import Image34 from "../../assets/nightlife/hola.avif"
import Image35 from "../../assets/nightlife/road.avif"
import Image36 from "../../assets/nightlife/cafe.avif"
import Image37 from "../../assets/nightlife/royal.avif"
import Image38 from "../../assets/nightlife/kebab.avif"

import Restaurant from "../../containercomponent/restaurant/Restaurant";

// import { Link } from "react-router-dom";

function ProductListing() {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search);

    // Access individual query parameters
    const status = queryParams.get('status');
    const shopName = queryParams.get('shopName');
    const rating = queryParams.get('rating');
    const price = queryParams.get('price');
    const time = queryParams.get('time');
    const calling = queryParams.get('calling')

    const address = queryParams.get('address')
    const distance = queryParams.get('distance')
    const image = queryParams.get('img')
    const aboutShop = queryParams.get('aboutShop')
    const arr = aboutShop.split(/\s*,\s*/);


    console.log("status and shopabme", status, shopName);
    const [inputval, setInputval] = useState("")
    // const [elementFound, setElementFouns] = useState(false)


    const Img = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17]

    const ShopName = ["Amburi", "Burger Mania", "Chennai Square", "Domino Pizza", "Kwality Wall's", "Haji Saheb", "Jadu Kadai", "Sanghai", "Wow Momo", "Hello Kolkata", "Monginis", "Khanti Bangali", "Subway", "Machhli Baba Fries", "Tea Junction", "Tewari Brothers", "Sharma Snacks", "Kreamz"]

    const AboutShop = ["Cafe, Coffee, Fast Food, Chinese, North Indian, Street Food, Desserts, Shake", "Burger", "South Indian, Beverages", "Pizza, Fast Food, Desserts", "Ice Cream, Desserts", "North Indian, Mughlai, Chinese, Seafood, Biryani, Rolls, Fast Food", "Chinese, North Indian, Mughlai, Kebab, Biryani, Sichuan, Desserts, Beverages", "Chinese, Sichuan, Asian, Seafood, Beverages", "Momos, Fast Food", "Bengali, North Indian, Chinese", "Bakery, Fast Food, Street Food", "Bengali, North Indian, Fast Food, Beverages, Desserts, Shake", "Healthy Food, Sandwich, Fast Food, Wraps, Salad, Beverages", "Bengali, Street Food, Rolls, Kebab, Fast Food", "Beverages, Tea", "Mishti, North Indian, South Indian, Fast Food, Shake, Street Food", "Mishti, Street Food, South Indian, North Indian", "Bakery, Desserts, Street Food"]

    const Rating = [3.5, 4, 3, 4.5, 3, 3.5, 4.5, 4, 4, 3.5, 4.5, 4.5, 4.5, 2.5, 3, 4, 3.5, 4]

    const Price = [50, 200, 185, 45, 99, 120, 259, 100, 78, 225, 65, 199, 155, 100, 150, 60, 200, 125]

    const Time = [25, 40, 35, 12, 65, 38, 15, 18, 9, 26, 22, 19, 15, 12, 20, 36, 24, 32]


    //For Dining Out
    const Address = ["Behela, kolkata", "Alipore, kolkata", "New Alipore, kolkata", "Encalve, Alipore, kolkata", "Taratala, kolkata", "Behela, kolkata", "Encalve, Alipore, kolkata", "Taratala, kolkata", "Encalve, Alipore, kolkata", "Alipore, kolkata", "Behela, kolkata", "Alipore, kolkata", "Taratala, kolkata", "New Alipore, kolkata", "Encalve, Alipore, kolkata", "Taratala, kolkata", "Behela, kolkata", "New Alipore, kolkata", "Behela, kolkata", "Encalve, Alipore, kolkata", "Alipore, kolkata", "New Alipore, kolkata", "Encalve, Alipore, kolkata", "Encalve, Alipore, kolkata", "Encalve, Alipore, kolkata", "Alipore, kolkata"]
    const Distance = [5.4, 4, 3.3, 1.2, 6.5, 3.8, 1.5, 1.8, 9, 2.6, 2.2, 1.9, 1.5, 1.2, 2, 3.6, 2.4, 3.2, 2.5, 4, 3.5, 9.9, 6.5, 3.8, 1.5, 1.8]

    // For night life
    const NightLifeimg = [Image0, Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20, Image21, Image22, Image23, Image24, Image25, Image26, Image27, Image28, Image29, Image30, Image31, Image32, Image33, Image34, Image35, Image36, Image37, Image38]

    const NightLifeshopName = ["Desi Lane", "The Quince Restaurant Cum Bar", "The One By Morvee Hotels", "Red Kitchen & Lounge", "Club Aeries", "One8 Commune", "Effingut", "Soba Sassy", "Hammer", "Carpe Diem", "Sorano", "Romaania", "Olterra", "The Corner Courtyard", "Hard Rock Cafe", "Raasta", "Octa", "Vaayu", "Trincas", "Trincas", "The Bikers Cafe", "Lmnoq", "Warehouse Cafe", "Barishh", "The Lords And Barons", "Veneto Kitchen & Bar", "Lord Of The Drinks", "What's Up", "Miss Ginko", "Mainland China", "Flame & Grill", "Jalsa", "Scrapyard", "Spice Kraft", "TGI Fridays", "Hola", "RoadHouzz", "Cafe Mezzuna", "Royal China", "Kebab-e-Que - The Astor Hotel"]

    const NightLifeaboutShop = [
        "North Indian, Mughlai, Continental, Italian, Chinese, Salad, Biryani, Desserts",
        "North Indian, Chinese, Bar Food, Biryani",
        "Continental, Oriental, Pasta, Chinese, North Indian, Bar Food, Desserts",
        "Chinese, North Indian, Mughlai, Sichuan, Biryani, Desserts",
        "North Indian, Chinese, Italian, Continental, Grilled Chicken, Bar Food, Desserts, Beverages",
        "Finger Food, Continental, Italian, Asian, North Indian, Oriental, Beverages, Desserts",
        "North Indian, Continental, Oriental, Pizza, Fast Food, Biryani, Desserts, Beverages",
        "Asian, Chinese, Rolls, Seafood, Salad, Shake, Beverages, Desserts",
        "Continental, Mexican, North Indian, Chinese, Street Food, Tea, Coffee, Desserts",
        "Chinese, North Indian, Continental, Italian, Finger Food, Beverages, Desserts", "Italian, Continental, Pizza, Desserts, Beverages",
        "Continental, Italian, Mexican", "Continental, Italian, Mexican",
        "Italian, Salad, Pizza, Continental, Seafood, Bar Food, Desserts, Coffee",
        "American, Italian, Salad, Burger, Beverages, Wraps, Desserts",
        "North Indian, Italian, Chinese, Asian, Continental, Pizza, Fast Food, Beverages",
        "Sushi, Chinese, Italian, Asian, Bar Food, Desserts, Beverages",
        "Kebab, Pizza, Continental, Bar Food, Chinese, North Indian, Pasta", "Kebab, Pizza, Continental, Bar Food, Chinese, North Indian, Pasta",
        "Chinese, North Indian, Continental, Asian, Thai, Desserts, Beverages", "Italian, American, Continental, North Indian, Fast Food, Desserts, Beverages", "Continental, Italian, North Indian, Chinese, Asian, Beverages", "American, Italian, Asian, Continental, Desserts, Beverages", "North Indian, Continental, Italian, BBQ, Finger Food, Beverages, Desserts",
        "North Indian, Mughlai, Italian, Continental, Oriental, Bar Food, Desserts, Beverages",
        "South City Mall, Prince Anwar Shah Road, Kolkata",
        "Continental, North Indian, Chinese, Italian, Seafood, Finger Food, Beverages",
        "Italian, Continental, Oriental, North Indian, Mughlai, Seafood, Shake, Desserts", "Continental, Chinese, Seafood, Desserts, Asian, Japanese, Oriental, Thai",
        "Chinese, Seafood, Sushi, Asian, Oriental, Desserts, Beverages",
        "Kebab, Biryani, Beverages", "Modern Indian, North Indian, Mughlai, Finger Food, Beverages, Desserts",
        "North Indian, Chinese, Continental, Fast Food, Street Food, Beverages, Desserts", "Continental, Asian, North Indian, Mughlai, Seafood, Beverages, Desserts", "Mexican, American, Continental, Seafood, Desserts, Beverages", "Chinese, North Indian, Asian, Continental, Beverages", "Italian, Continental, Oriental, Mughlai, Kebab, Pasta, Pizza", "Italian, Pizza, Continental, Pasta, Desserts, Beverages", "Chinese, Asian, Seafood, Desserts, Beverages", "Kebab, North Indian, Chinese, Asian, Continental, Bengali, Biryani, Desserts"]

    const NightLiferating = [4.1, 4.4, 4.2, 4.5, 3, 3.5, 4.5, 4, 4, 3.5, 4.5, 4.5, 4.5, 2.5, 3, 4, 3.5, 4, 3.5, 4, 3, 4.5, 3, 3.5, 4.5, 4, 4.1, 4.4, 4.2, 4.5, 3, 3.5, 4.5, 4, 4, 3.5, 4.5, 4.5, 3.9]

    const NightLifeprice = [1400, 1200, 1850, 450, 990, 1200, 2599, 1090, 778, 2250, 645, 1099, 1505, 1000, 1500, 690, 2080, 1250, 5900, 2000, 1985, 450, 990, 1200, 2590, 1100, 1400, 1200, 1850, 450, 990, 1200, 2599, 1090, 778, 2250, 645, 1099, 1505]

    const NightLifedistance = [3.3, 1.2, 3.3, 1.2, 6.5, 3.8, 1.5, 1.8, 9, 2.6, 2.2, 1.9, 1.5, 1.2, 2, 3.6, 2.4, 3.2, 2.5, 4, 3.5, 4.9, 6.5, 3.8, 1.5, 1.8, 3.3, 1.2, 3.3, 1.2, 6.5, 3.8, 1.5, 1.8, 9, 2.6, 2.2, 1.9, 1.5]
    const NightLifeaddress = ["Enclave, Alipore, Kolkata", "Alipore, kolkata", "New Alipore, kolkata", "Encalve, Alipore, kolkata", "Taratala, kolkata", "Behela, kolkata", "Encalve, Alipore, kolkata", "Taratala, kolkata", "Encalve, Alipore, kolkata", "Alipore, kolkata", "Behela, kolkata", "Alipore, kolkata", "Taratala, kolkata", "New Alipore, kolkata", "Encalve, Alipore, kolkata", "Taratala, kolkata", "Behela, kolkata", "New Alipore, kolkata", "Behela, kolkata", "Encalve, Alipore, kolkata", "Alipore, kolkata", "New Alipore, kolkata", "Encalve, Alipore, kolkata", "Encalve, Alipore, kolkata", "Encalve, Alipore, kolkata", "Alipore, kolkata", "Enclave, Alipore, Kolkata", "Alipore, kolkata", "New Alipore, kolkata", "Encalve, Alipore, kolkata", "Taratala, kolkata", "Behela, kolkata", "Encalve, Alipore, kolkata", "Taratala, kolkata", "Encalve, Alipore, kolkata", "Alipore, kolkata", "Behela, kolkata", "Alipore, kolkata", "Taratala, kolkata", "Taratala, kolkata"]

    function handleSearch(e) {
        setInputval(e.target.value)
    }

    return (
        <>
            {calling == "delivery" ?
                <>
                    <Header search={handleSearch} status={status} />
                    {inputval}
                    {
                        inputval != "" ?
                            <>
                                <div className="search-box">
                                    <div onClick={() => setInputval("")}>
                                        <Restaurant inputvalue={inputval} status={status || 0} img={Img} shopName={ShopName} aboutShop={AboutShop} rating={Rating} price={Price} time={Time} title={"Best Restaurant in Kolkata"} calling="delivery" />
                                    </div>
                                </div>
                            </> :
                            <>
                            </>
                    }
                    <hr style={{ border: "1px solid rgb(244, 241, 241)" }} />
                    <div className="all-about-restaurant">
                        <img src={image} alt="Image" />
                        <div className="shop-details">
                            <div className="aboutshop">
                                <span>{shopName}</span>
                                <div style={{ color: "rgb(105, 105, 105)" }}>{aboutShop}</div>
                            </div>
                            <div className="rating">
                                <div>{`${rating}★`}</div>
                                <div>{`${rating}★`}</div>
                            </div>
                        </div>
                        <div className="button">
                            <button>
                                <MdOutlineDirections className="icon" />
                                <span>Direction</span>
                            </button>
                            <button>
                                <BsBookmarkPlus className="icon" />
                                <span>Bookmark</span>
                            </button>
                            <button>
                                <PiShareFatLight className="icon" />
                                <span> Share</span>
                            </button>
                        </div>
                        <ProductSection arr={arr} />

                    </div>
                </> :
                <>
                    {
                        calling == "dining-out" ?
                            <>
                                <Header search={handleSearch} status={status} />
                                {
                                    inputval != "" ?
                                        <>
                                            <div className="search-box">
                                                <div onClick={() => setInputval("")}>
                                                    <Restaurant inputvalue={inputval} status={status || 0} img={Img} shopName={ShopName} aboutShop={AboutShop} rating={Rating} price={Price} distance={Distance} title={"Best Restaurant in Kolkata"} address={Address} calling="dining-out" />
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                        </>
                                }

                                <hr style={{ border: "1px solid rgb(244, 241, 241)" }} />
                                <div className="all-about-restaurant">
                                    <img src={image} alt="Image" />
                                    <div className="shop-details">
                                        <div className="aboutshop">
                                            <span>{shopName}</span>
                                            <div style={{ color: "rgb(105, 105, 105)" }} >{aboutShop}</div>
                                            <div>{address}</div>
                                        </div>
                                        <div className="rating">
                                            <div>{`${rating}★`}</div>
                                            <div>{`${rating}★`}</div>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button>
                                            <MdOutlineDirections className="icon" />
                                            <span>Direction</span>
                                        </button>
                                        <button>
                                            <BsBookmarkPlus className="icon" />
                                            <span>Bookmark</span>
                                        </button>
                                        <button>
                                            <PiShareFatLight className="icon" />
                                            <span> Share</span>
                                        </button>
                                    </div>
                                    <ProductSection arr={arr} />
                                </div>
                            </> :
                            <>
                                <Header search={handleSearch} status={status} />
                                {
                                    inputval != "" ?
                                        <>
                                            <div className="search-box">
                                                <div onClick={() => setInputval("")}>
                                                    <Restaurant inputvalue={inputval} status={status || 0} img={NightLifeimg} shopName={NightLifeshopName} aboutShop={NightLifeaboutShop} rating={NightLiferating} price={NightLifeprice} title={"Best Restaurant in Kolkata"} calling="night-life" distance={NightLifedistance} address={NightLifeaddress} />
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                        </>
                                }

                                <hr style={{ border: "1px solid rgb(244, 241, 241)" }} />
                                <div className="all-about-restaurant">
                                    <img src={image} alt="Image" />
                                    <div className="shop-details">
                                        <div className="aboutshop">
                                            <span>{shopName}</span>
                                            <div style={{ color: "rgb(105, 105, 105)" }} >{aboutShop}</div>
                                            <div>{address}</div>
                                        </div>
                                        <div className="rating">
                                            <div>{`${rating}★`}</div>
                                            <div>{`${rating}★`}</div>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button>
                                            <MdOutlineDirections className="icon" />
                                            <span>Direction</span>
                                        </button>
                                        <button>
                                            <BsBookmarkPlus className="icon" />
                                            <span>Bookmark</span>
                                        </button>
                                        <button>
                                            <PiShareFatLight className="icon" />
                                            <span> Share</span>
                                        </button>
                                    </div>
                                    <ProductSection arr={arr} />
                                </div>
                            </>
                    }
                </>
            }
        </>
    )
}
export default ProductListing