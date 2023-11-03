import img0 from "../assets/topBrandsAssets/wowmomo.avif";
import img1 from "../assets/topBrandsAssets/kfc.avif";
import img2 from "../assets/topBrandsAssets/dominopizza.avif";
import img3 from "../assets/topBrandsAssets/chowman.webp";
import img4 from "../assets/topBrandsAssets/kwalitywall.avif";
import img5 from "../assets/topBrandsAssets/arsalan.avif";
import img6 from "../assets/topBrandsAssets/burgerking.avif";
import img7 from "../assets/topBrandsAssets/kasturirestaurant.avif";
import img8 from "../assets/topBrandsAssets/wowchina.avif";
import img9 from "../assets/topBrandsAssets/mioamore.avif";
function useTopBrandAsset() {
  const productType = [
    "WOW! Momo",
    "KFC",
    "Domino Pizza",
    "Chowman",
    "Kwality Wall's",
    "Arsalan",
    "Burger King",
    "Kasturi Restaurant",
    "WOW! China",
    "Mio Amore",
  ];
  const aboutProduct = [
    "WOW! Momo",
    "KFC",
    "Domino Pizza",
    "Chowman",
    "Kwality Wall's",
    "Arsalan",
    "Burger King",
    "Kasturi Restaurant",
    "WOW! China",
    "Mio Amore",
  ];
  const rating = [4.5, 5, 4.5, 4, 4, 4, 5, 4.5, 4, 5];
  const productTypeImage = [
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
  ];
  const time = [12, 8, 27, 35, 14, 19, 22, 25, 18, 13];
  const price = [12, 8, 27, 35, 14, 19, 22, 25, 18, 13];
  return {productType, aboutProduct, rating, productTypeImage, time, price}
}

export default useTopBrandAsset;
