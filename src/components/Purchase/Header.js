import React from 'react'
import { BsFillPersonFill, BsFillBrushFill } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import "../Purchase/Header.css"
const Header = () => {
  return (
    <div>
      <div className="container-top">
        <div className="top">
          <AiFillBell />
        </div>
        <div className="top">
          <BsFillBrushFill style={{ color: "DodgerBlue" }} />
        </div>
        <div className="top">
          <BsFillPersonFill />
        </div>
      </div>
      <div className="mid-item">
        <p style={{ margin: "15px" }}>مدیریت خرید</p>
        <button className="mid-button">ثبت خرید جدید </button>
      </div>
    </div>
  )
}

export default Header