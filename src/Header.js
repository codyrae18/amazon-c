import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function header() {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
        {/* Logo */}
      </div>

      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLine1">Hello Guest</span>
          <span className="header-optionLine2">Sign in</span>
        </div>
        <div className="header-option">
          <span className="header-optionLine1">Returns</span>
          <span className="header-optionLine2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLine1">Your</span>
          <span className="header-optionLine2">Prime</span>
        </div>
        <div className="header-optionBasket">
          <ShoppingBasketIcon />
          <span className="header-optionLine2 header-basetCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default header;
