import img0 from "../assets/restaurant/amburi.avif";
import img1 from "../assets/restaurant/burgerMania.avif";
import img2 from "../assets/restaurant/chennaiSquare.avif";
import img3 from "../assets/restaurant/dominoPizza.avif";
import img4 from "../assets/restaurant/kwalityWall.avif";
import img5 from "../assets/restaurant/hajiSaheb.avif";
import img6 from "../assets/restaurant/jaduKadai.avif";
import img7 from "../assets/restaurant/sanghai.avif";
import img8 from "../assets/restaurant/wowMomo.avif";
import img9 from "../assets/restaurant/helloKolkata.avif";
import img10 from "../assets/restaurant/monginis.avif";
import img11 from "../assets/restaurant/khanti.avif";
import img12 from "../assets/restaurant/subway.avif";
import img13 from "../assets/restaurant/machhliBabaFries.avif";
import img14 from "../assets/restaurant/teaJunction.avif";
import img15 from "../assets/restaurant/tewariBrother.avif";
import img16 from "../assets/restaurant/sharmaSnacks.avif";
import img17 from "../assets/restaurant/kreamz.avif";

function useHomepageAsset() {
  const img = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17
  ];
  const shopName = [
    "Amburi",
    "Burger Mania",
    "Chennai Square",
    "Domino Pizza",
    "Kwality Wall's",
    "Haji Saheb",
    "Jadu Kadai",
    "Sanghai",
    "Wow Momo",
    "Hello Kolkata",
    "Monginis",
    "Khanti Bangali",
    "Subway",
    "Machhli Baba Fries",
    "Tea Junction",
    "Tewari Brothers",
    "Sharma Snacks",
    "Kreamz"
  ];

  const aboutShop = [
    "Cafe, Coffee, Fast Food, Chinese, North Indian, Street Food, Desserts, Shake",
    "Burger",
    "South Indian, Beverages",
    "Pizza, Fast Food, Desserts",
    "Ice Cream, Desserts",
    "North Indian, Mughlai, Chinese, Seafood, Biryani, Rolls, Fast Food",
    "Chinese, North Indian, Mughlai, Kebab, Biryani, Sichuan, Desserts, Beverages",
    "Chinese, Sichuan, Asian, Seafood, Beverages",
    "Momos, Fast Food",
    "Bengali, North Indian, Chinese",
    "Bakery, Fast Food, Street Food",
    "Bengali, North Indian, Fast Food, Beverages, Desserts, Shake",
    "Healthy Food, Sandwich, Fast Food, Wraps, Salad, Beverages",
    "Bengali, Street Food, Rolls, Kebab, Fast Food",
    "Beverages, Tea",
    "Mishti, North Indian, South Indian, Fast Food, Shake, Street Food",
    "Mishti, Street Food, South Indian, North Indian",
    "Bakery, Desserts, Street Food"
  ];

  const rating = [
    3.5, 4, 3, 4.5, 3, 3.5, 4.5, 4, 5, 3.5, 4.5, 4.5, 4.5, 2.5, 3, 4, 3.5, 4
  ];

  const price = [
    50, 200, 185, 45, 99, 120, 259, 100, 78, 225, 65, 199, 155, 100, 150, 60,
    200, 125
  ];

  const time = [
    25, 40, 35, 12, 65, 38, 15, 18, 9, 26, 22, 19, 15, 12, 20, 36, 24, 32
  ];
  return { img, shopName, aboutShop, rating, price, time };
}
export default useHomepageAsset;
