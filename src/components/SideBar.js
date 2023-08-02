import React from "react";
import "../components/SideBar.css";
import { ListGroup } from "react-bootstrap";
import { AiFillHome, AiFillCheckCircle } from "react-icons/ai";
import { BiMobile } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsFillDatabaseFill, BsBarChartFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";

import Test from "./Test";
import { useNavigate } from "react-router-dom";

const person = [
  {
    name: "من",
    description: "some text",
  },
  {
    name: "محمود فتایی",
    description: "some text",
  },
  {
    name: "آرمین فلاحتی",
    description: "some text",
  },
  {
    name: "فرید احمدیان",
    description: "some text",
  },
  {
    name: "علی محمد زاده",
    description: "some text",
  },
];

const SideBar = () => {
  const navigate =useNavigate();
  return (
    <div className="sidebar">
      <ListGroup>
        <ListGroup.Item
          className="ListGroup-Item "
          style={{ height: "100px", alignItems: "center" }}
        >
          <div>
            <AiFillHome className="side-icon" />
          </div>
          <div className="middle-item">داشبورد</div>
          <div style={{ width: "2px" }}> </div>
        </ListGroup.Item>
        <ListGroup.Item >
          <div className="ListGroup-Item ListGroup-margin " onClick={() => navigate("Purchase")}>
            <div className="ListGroup-Item">
              <BiMessageAltDetail
                className="side-icon"
                style={{ color: "lightblue" }}
              />
            </div>
            <div className="middle-item pcolor"  >مدیریت خرید</div>
            <div>
              <p
                className="Pgroup"
                style={{ backgroundColor: "lightblue", color: "white" }}
              >
                1
              </p>
            </div>
          </div>
          {/* asdaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
          <div className="ListGroup-Item ListGroup-margin">
            <div className="ListGroup-Item">
              <IoNewspaperOutline
                className="side-icon"
                style={{ color: "darkblue" }}
              />
            </div>
            <div className="middle-item pcolor">مدیریت مالی</div>
            <div>
              <p
                className="Pgroup"
                style={{ backgroundColor: "darkslateblue", color: "white" }}
              >
                2
              </p>
            </div>
          </div>
          {/* asdaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
          <div className="ListGroup-Item ListGroup-margin">
            <div className="ListGroup-Item">
              <AiFillCheckCircle
                className="side-icon"
                style={{ color: "green" }}
              />
            </div>
            <div className="middle-item pcolor"> کیف پول</div>
            <div>
              <p
                className="Pgroup"
                style={{ backgroundColor: "green", color: "white" }}
              >
                3
              </p>
            </div>
          </div>
          {/* asdaaaaaaaaaaaaaaaaaaaaaaaaaaa */}
          <div className="ListGroup-Item ListGroup-margin">
            <div className="ListGroup-Item">
              <BiMobile className="side-icon" style={{ color: "lightcoral" }} />
            </div>
            <div className="middle-item pcolor">هویت اشخاص</div>
            <div>
              <p
                className="Pgroup"
                style={{ backgroundColor: "lightcoral", color: "white" }}
              >
                4
              </p>
            </div>
          </div>

          <div
            className="ListGroup-Item ListGroup-margin"
            style={{ justifyContent: "flex-start" }}
          >
            <BsFillDatabaseFill
              className="side-icon"
              style={{ color: "orange" }}
            />
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="sidebar-items"></ListGroup.Item>
        {/* ------------------------------------------------------------------------------- */}
        <div className="ListGroup-Item ">
          <div className="ListGroup-Item">
            <BiSolidContact className="side-icon" style={{ color: "gray" }} />
          </div>
          <div className="middle-item pcolor">ماشین حساب تبدیل واحد</div>
          <div></div>
        </div>

        <div
          className="ListGroup-Item "
          style={{
            alignItems: "center",
            backgroundColor: "lightgray",
            margin: "10px 10px 0px 10px",
          }}
        >
          <div className="ListGroup-Item">
            <BsBarChartFill
              className="side-icon"
              style={{ color: "lightskyblue" }}
            />
          </div>
          <div className="middle-item pcolor" style={{ fontSize: "25px" }}>
            مانیتورینگ
          </div>
          <div></div>
        </div>

        {/*-----------همکاران -------------- */}
        <div
          className="ListGroup-Item "
          style={{ margin: "10px 10px 0px 10px" }}
        >
          <div className="mid">همکارانم</div>
        </div>
        {person.map((data, index) => {
          return (
            <div style={{ display: "flex" }} key={index}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "lightblue",
                  margin: "5px",
                }}
              ></div>
              <div>
                <div>
                  <b>{data.name}</b>
                </div>
                <div style={{ opacity: "0.5" }}>{data.description}</div>
              </div>
            </div>
          );
        })}
        <div className="ListGroup-Item " style={{justifyContent:"flex-start",marginRight:"10px"}}>
        
          <p>
            <a href="#" style={{textDecoration:"none"}}>+ دعوت از عضو جدید </a>
          </p>
        </div>
      </ListGroup>
      <Test/>
    </div>
  );
};

export default SideBar;
