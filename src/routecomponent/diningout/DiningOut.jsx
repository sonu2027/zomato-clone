import "./DiningOut.css"
import Header from "../../containercomponent/header/Header"
import Section from "../../containercomponent/section/Section"
import { useParams } from "react-router-dom"
import Restaurant from "../../containercomponent/restaurant/Restaurant"

import img0 from "../../assets/diningout/95degree.avif"
import img1 from "../../assets/diningout/baristacoffee.avif"
import img2 from "../../assets/diningout/biryanibykilo.avif"
import img3 from "../../assets/diningout/bunosilo.avif"
import img4 from "../../assets/diningout/chinagreen.avif"
import img5 from "../../assets/diningout/chinoiserie.avif"
import img6 from "../../assets/diningout/chowman.avif"
import img7 from "../../assets/diningout/cocoabakery.avif"
import img8 from "../../assets/diningout/darkroomcafe.avif"
import img9 from "../../assets/diningout/desilane.avif"
import img10 from "../../assets/diningout/desingrill.avif"
import img11 from "../../assets/diningout/hungru.avif"
import img12 from "../../assets/diningout/indiarestaurant.avif"
import img13 from "../../assets/diningout/kasturi.avif"
import img14 from "../../assets/diningout/kfc.avif"
import img15 from "../../assets/diningout/koshekosha.avif"
import img16 from "../../assets/diningout/morvehostel.avif"
import img17 from "../../assets/diningout/mqxt.avif"
import img18 from "../../assets/diningout/oudh1590.avif"
import img19 from "../../assets/diningout/rangdebasanti.avif"
import img20 from "../../assets/diningout/royalpunjabi.avif"
import img21 from "../../assets/diningout/sanghai.avif"
import img22 from "../../assets/diningout/saptapadi.avif"
import img23 from "../../assets/diningout/sonargao.avif"
import img24 from "../../assets/diningout/wowchina.avif"
import img25 from "../../assets/diningout/wowmomo.avif"

import discountImage from "../../assets/diningout/discount.avif"


function DiningOut(){
    const {status}=useParams()
    console.log("status in dining out", status);

    const img = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25]

    const shopName = ["Amburi", "Burger Mania", "Chennai Square", "Domino Pizza", "Kwality Wall's", "Haji Saheb", "Jadu Kadai", "Sanghai", "Wow Momo", "Hello Kolkata", "Monginis", "Khanti Bangali", "Subway", "Machhli Baba Fries", "Tea Junction", "Tewari Brothers", "Sharma Snacks", "Kreamz", "Mongini", "Khanti Bangal", "Subwa", "Machhli Baba Frie", "Tea Junctio", "Tewari Brother", "Sharma Snack", "Kream"]

    const aboutShop = ["Cafe, Coffee, Fast Food, Chinese, North Indian, Street Food, Desserts, Shake", "Burger", "South Indian, Beverages", "Pizza, Fast Food, Desserts", "Ice Cream, Desserts", "North Indian, Mughlai, Chinese, Seafood, Biryani, Rolls, Fast Food", "Chinese, North Indian, Mughlai, Kebab, Biryani, Sichuan, Desserts, Beverages", "Chinese, Sichuan, Asian, Seafood, Beverages", "Momos, Fast Food", "Bengali, North Indian, Chinese", "Bakery, Fast Food, Street Food", "Bengali, North Indian, Fast Food, Beverages, Desserts, Shake", "Healthy Food, Sandwich, Fast Food, Wraps, Salad, Beverages", "Bengali, Street Food, Rolls, Kebab, Fast Food", "Beverages, Tea", "Mishti, North Indian, South Indian, Fast Food, Shake, Street Food", "Mishti, Street Food, South Indian, North Indian", "Bakery, Desserts, Street Food", "Healthy Food, Sandwich, Fast Food, Wraps, Salad, Beverage", "Bengali, Street Food, Rolls, Kebab, Fast Foo", "Beverages, Te", "Mishti, North Indian, South Indian, Fast Food, Shake, Street Foo", "Mishti, Street Food, South Indian, North India", "Bakery, Desserts, Street Foo","Mishti, Street Food, South Indian, North India", "Bakery, Desserts, Street Foo"]

    const rating = [3.5, 4, 3, 4.5, 3, 3.5, 4.5, 4, 4, 3.5, 4.5, 4.5, 4.5, 2.5, 3, 4, 3.5, 4, 3.5, 4, 3, 4.5, 3, 3.5, 4.5, 4]

    const price = [50 , 200 , 185 , 45 , 99 , 120 , 259 , 100 , 78 , 225 , 65 , 199 , 155 , 100 , 150 , 60 , 200 , 12550 , 200 , 185 , 45 , 99 , 120 , 259 , 100 ]
    
    const time = [25 , 40 , 35 , 12 , 65 , 38 , 15 , 18 ,9 , 26 , 22 , 19 , 15 , 12 , 20 , 36 , 24 , 32,25 , 40 , 35 , 12 , 65 , 38 , 15 , 18 ]

    return(
        <>
        <Header status={status} />
        <Section status={status}/>
        <img class="discount-image" src={discountImage} alt="" />
        <Restaurant img={img} shopName={shopName} aboutShop={aboutShop} rating={rating} price={price} time={time} title={"Trending dining restaurants in Jagannath Nagar, Bangashree Pally, Maheshtala"}/>
        </>
    )
}
export default DiningOut