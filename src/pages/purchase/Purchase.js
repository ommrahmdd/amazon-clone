// import React from "react";
import { useSelector } from "react-redux/es/exports";
import LocalizedStrings from "react-localization";
import "./purchase.css";
import { useFormik } from "formik";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
export default function Purchase() {
  let lang = useSelector((state) => state.lang.lang);
  let stripe = useStripe();
  let element = useElements();
  // HANDLE: localization
  let formStrings = new LocalizedStrings({
    en: {
      title: "Payment Processing",
      name: "Name",
      address: "Address",
      phone: "Phone",
      email: "Email",
      buy: "Buy Now",
    },
    ar: {
      title: "عملية الشراء",
      name: "الاسم",
      address: "العنوان",
      phone: "رقم الهاتف",
      email: "البريد الالكتروني",
      buy: "شراء الان",
    },
  });
  formStrings.setLanguage(lang);
  // ---------------------------------------------
  // HANDLE: formik
  let formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      phone: "",
      email: "",
    },
    //HANDLE: Payment process
    onSubmit: (values) => {
      //1) Gathering data
      let cardElement = element.getElement("card");
      let { name, address, phone, email } = values;
      let billing_info = {
        name,
        phone,
        email,
        address: {
          line1: address,
        },
      };
      //2) handle payment intent with static amount
      let paymentIntent = axios.post("route", {
        amount: 5 * 100,
      });
      //3) handle payment method
      let paymentMethodObj = stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billing_info,
      });
      //4)handle confirm the payment
    },
  });
  // ---------------------------------------------
  return (
    <div
      className={`purchase  ${
        lang == "en" ? "purchase__txt-en" : "purchase__txt-ar"
      }`}
      dir={lang == "en" ? "ltr" : "rtl"}
    >
      <div className="row">
        <div className="col-md-6 purchase__left">
          <h2 className="payment__title">{formStrings.title}</h2>
          <form
            className="my-5"
            onSubmit={(e) => {
              e.preventDefault();
              return formik.handleSubmit();
            }}
          >
            <div className="mb-3">
              <label htmlFor="name" className="purchase__form-label">
                {formStrings.name}
              </label>
              <input
                type="text"
                id="name"
                className="form-control w-75 purchase__form-input"
                value={formik.values.name}
                onChange={formik.handleChange("name")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="purchase__form-label">
                {formStrings.address}
              </label>
              <input
                type="text"
                id="address"
                className="form-control w-75 purchase__form-input"
                value={formik.values.address}
                onChange={formik.handleChange("address")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="purchase__form-label">
                {formStrings.phone}
              </label>
              <input
                type="text"
                id="phone"
                className="form-control w-75 purchase__form-input"
                value={formik.values.phone}
                onChange={formik.handleChange("phone")}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="purchase__form-label">
                {formStrings.email}
              </label>
              <input
                type="email"
                id="email"
                className="form-control w-75 purchase__form-input"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
              />
            </div>
            <div className="my-5 w-75">
              <CardElement
                options={{
                  hidePostalCode: true,
                  style: {
                    base: {
                      fontSize: "16px",
                    },
                  },
                }}
              />
            </div>
            <div className="mt-4">
              <button type="submit" className="btn btn-primary fs-4 py-2 px-5">
                {formStrings.buy}
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6 purchase__right d-flex jusityf-content-center align-items-center">
          <img
            src={require("./../../assets/payment/payment.png")}
            className="purchase__right-img"
          />
        </div>
      </div>
    </div>
  );
}
