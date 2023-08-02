import React from "react";
import "../App.css";
import { BsList } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { PiChatsThin } from "react-icons/pi";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import "../components/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="right-header">
        <BsList className="icon-right" />
        <p>سامانه</p>
      </div>
      <div
        className="left-header"
        style={{
          // backgroundColor: "rgba(30, 143, 255, 0.7);",
        }}
      >
        <div
          style={{
            // backgroundColor:"rgba(30, 143, 255, 0.7)",
            width: "20px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // opacity:"0.7"
          }}
        >
          <BsSearch className="iconSearch" style={{ height: "100%" }} />
        </div>
        <div>
          <input type="text" className="searchInput" placeholder="جستجو" />
        </div>

        <div style={{ backgroundColor: "DodgerBlue", display: "flex" }}>
          <AiOutlineQuestionCircle className="left-icon" />
          <PiChatsThin className="left-icon" />
          <FiSettings className="left-icon" />
          <CgProfile className="left-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
