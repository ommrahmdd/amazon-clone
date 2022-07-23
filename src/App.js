import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import lang_action from "./store/actions/lang";
import { useState } from "react";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Electronics from "./components/electronics/Electronics";
import ProductDetails from "./components/productDetails/productDetails";
function App() {
  let dispatch = useDispatch();
  let [lang, setLang] = useState("en");
  let handleChangeLang = (e) => {
    setLang(e.target.value);
    console.log(e.target.value);
    dispatch(lang_action(lang));
  };
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <div className="container-fluid  appContainer">
          <Switch>
           
            <Route path="/electronics" exact component={Electronics}  />
            <Route path="/productDetails/:id" component={ProductDetails} />
            <Route path="/" exect component={Home} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
