import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
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

        <Link to="/checkout">
          <div className="header-optionBasket">
            <ShoppingBasketIcon />
            <span className="header-optionLine2 header-basetCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default header;
