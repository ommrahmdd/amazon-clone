import React from "react";
import { useState } from "react";
import BigCart from "../../components/bigCart/BigCart";
import Slider from "../../components/Slider/Slider";
import MidCart from "../../components/midCart/MidCart";
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
  let [offersToday, setOffersToday] = useState([
    {
      img: require("./../../assets/TodayOffer/watch_mens.jpg"),
      path: "/mensWatches",
      discount_perc: 22,
    },
    {
      img: require("./../../assets/TodayOffer/step.jpg"),
      path: "/steps",
      discount: 10078,
    },
    {
      img: require("./../../assets/TodayOffer/shoes_women.jpg"),
      path: "/shoesWomen",
      discount: 559.2,
    },
    {
      img: require("./../../assets/TodayOffer/shoes_mens.jpg"),
      path: "/shoesMens",
      discount: 2249,
    },
    {
      img: require("./../../assets/TodayOffer/shirt_baby.jpg"),
      path: "/shirtsBaby",
      discount: 210,
    },
    {
      img: require("./../../assets/TodayOffer/sama3a.jpg"),
      path: "/electronic/headphones",
      discount_perc: 22,
    },
    {
      img: require("./../../assets/TodayOffer/gamig.jpg"),
      path: "/computers",
      discount: 250,
    },
    {
      img: require("./../../assets/TodayOffer/crocs.jpg"),
      path: "/crocs",
      discount: 50,
    },
    {
      img: require("./../../assets/TodayOffer/cotonel.jpg"),
      path: "/cotonel",
      discount_perc: 10,
    },
    {
      img: require("./../../assets/TodayOffer/phones.jpg"),
      path: "/phones",
      discount: 400,
    },
    {
      img: require("./../../assets/TodayOffer/mobile_accessories.jpg"),
      path: "/mobileAccessories",
      discount_perc: 22,
    },

    {
      img: require("./../../assets/TodayOffer/shoes_mens_2.jpg"),
      path: "/shoesMens",
      discount: 2249,
    },

    {
      img: require("./../../assets/TodayOffer/active_bage.jpg"),
      path: "/bages",
      discount_perc: 10,
    },
  ]);
  return (
    <>
      <div className="homeSection">
        <Slider />
        <div className="homeContent p-0 m-0">
          <div className="row overflow-hidden gx-5 section">
            {products.slice(0, 4).map((prod, index) => (
              <BigCart product={prod} key={index} />
            ))}
          </div>
          <div className="row overflow-hidden gx-5 section">
            {products.slice(4, 8).map((prod, index) => (
              <BigCart product={prod} key={index} />
            ))}
          </div>
          <div className="overflow-hidden section">
            <MidCart products={offersToday} />
          </div>
        </div>
      </div>
    </>
  );
}
