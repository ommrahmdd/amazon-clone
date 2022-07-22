import React from "react";
import { useState } from "react";
import BigCart from "../../components/bigCart/BigCart";
import Slider from "../../components/Slider/Slider";
import "./home.css";
export default function Home() {
  let [products, setProducts] = useState([
    {
      title: {
        en: "Women's Shoes",
        ar: "أحذية نسائية",
      },
      image: require("../../assets/home/women_shoes.jpg"),
      discount: 40,
      path: "/womenShoes",
    },
    {
      title: {
        en: "Join Prime to access epic deals on Prime Day",
        ar: "اشترك في برايم واستمتع بعروض يوم برايم",
      },
      image: require("../../assets/home/prime.jpg"),
      path: "/prime",
    },
    {
      title: {
        en: "Women's Watches",
        ar: "ساعات للنساء",
      },
      image: require("../../assets/home/women_watches.jpg"),
      discount: 40,
      path: "/womenWatches",
    },
    {
      title: {
        en: "Beach Store",
        ar: "أساسيات البحر",
      },
      image: require("../../assets/home/beach.jpg"),
      discount: 40,
      path: "/beach",
    },
    {
      title: {
        en: "Clearance Sale",
        ar: "عروض أخر فرصة",
      },
      image: require("../../assets/home/discounts.jpg"),
      discount: 50,
      path: "/clearanceSale",
    },
    {
      title: {
        en: "Buy your new phone today",
        ar: "اشتري موبايلك الجديد النهارده",
      },
      image: require("../../assets/home/mobiles.jpg"),
      discount: 20,
      path: "/phones",
    },
    {
      title: {
        en: "Clothes for woman",
        ar: "ملابس للنساء",
      },
      image: require("../../assets/home/women_clothes.jpg"),
      discount: 20,
      path: "/womenClothes",
    },
    {
      title: {
        en: "For 9 EGP | Mobile accessories",
        ar: " فقط 9 جنية | إكسسوارات الموبايلات",
      },
      image: require("../../assets/home/mobile_acc.jpg"),
      path: "/mobileAccessories",
    },
  ]);
  return (
    <>
      <div className="homeSection">
        <Slider  />
        
        <div className="homeContent p-3 m-0" >
          <div className="row overflow-hidden gx-5 section" >
            {products.map((prod, index) => (
              <BigCart product={prod} key={index} />
            ))}
          </div>
          {/* <div className="row overflow-hidden gx-5 section">
            {products.slice(4, 8).map((prod, index) => (
              <BigCart product={prod} key={index} />
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
