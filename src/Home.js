import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home-row">
          <Product
            id="12321341"
            title="React and React Native: A complete hands-on guide to modern web and mobile development with React.js, 3rd Edition"
            price={34.99}
            image="data:image/webp;base64,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"
            rating={5}
          />
          <Product
            id="40538095"
            title="kenwood kMix Stand mixer for Baking, Stylish kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71tFSCIo0ML._AC_SL1500_.jpg"
            rating={4}
          />
          {/*Product*/}
        </div>

        <div className="home-row">
          <Product
            id="4903850"
            title="SAMSUNG Galaxy Watch 3 (41mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking, and Long Lasting Battery - Mystic Silver (US Version)"
            price={319.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81Iu41zFPwL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id="4355212"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id="4334534"
            title="New Apple iPad (10.2-inch, Wi-Fi + Cellular, 128GB) - Gold (Latest Model, 8th Generation)"
            price={559.0}
            image="https://images-na.ssl-images-amazon.com/images/I/7194qXxwJQL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home-row">
          <Product
            id="4334636"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41%2BCXFgQwjL._AC_SX466_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
