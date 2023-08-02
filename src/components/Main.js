import React from "react";
import "../components/Main.css";
import { IoAppsSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { CgProfile, CgUserAdd } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { LuContact } from "react-icons/lu";

import Charts1 from "./Charts1";
import Charts2 from "./Charts2";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
  const today = Date.now();
  const todayFa = {
    day: getDateFormat(today, { day: "2-digit" }),
    month: getDateFormat(today, { month: "numeric" }),
    monthTitle: getDateFormat(today, { month: "long" }),
    year: getDateFormat(today, { year: "numeric" }),
    dayWeek: getDateFormat(today, { weekday: "long" }),
  };

  function getDateFormat(uDate, option) {
    let date = new Intl.DateTimeFormat("fa-IR", option).format(uDate);
    return date;
  }

  return (
    <div className="root">
      <div className="main">
        <h1>مانیتورینگ سامانه</h1>
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "40px" }}
        >
          <div className="items1">
            <IoAppsSharp className="first-icons" />
          </div>
          <div className="items1">
            <FaUserFriends className="first-icons item-color1" />
          </div>
          <div className="items1">
            <CgProfile className="first-icons item-color2" />
            کاربران مصرفی
          </div>
          <div className="items1">
            <CgUserAdd className="first-icons item-color3" />
            کاربران سامانه
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "40px",
            color: "black",
            justifyContent: "space-between",
          }}
        >
          <div className="items2">
            <TfiMenuAlt className="second-icons" />
          </div>
          <div className="items2 " style={{ justifyContent: "flex-end" }}>
            <b>
              <p className=" date">
                {todayFa.dayWeek} {todayFa.day} {todayFa.monthTitle}
                {todayFa.year}
              </p>
            </b>
          </div>
          <div
            className="items2 greenItem"
            style={{ justifyContent: "space-between" }}
          >
            <div style={{ display: "flex" }}>
              <BsFillPersonFill
                className="second-icons greenItem"
                style={{ width: "30px" }}
              />

              <p
                className="second-icons greenItem"
                style={{ fontSize: "16px" }}
              >
                مالک میزکار
              </p>
            </div>
            <p className="second-icons greenItem" style={{ fontSize: "16px" }}>
              <b>james</b>
            </p>
          </div>
        </div>

        <div style={{ marginTop: "20px", boxSizing: "border-box" }}>
          <Container fluid className="grid ">
            <Row className="gap-4">
              <Col className="col col-2 ">
                <AiOutlineCheckCircle
                  style={{
                    color: "rgb(28, 141, 16)",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </Col>
              <Col
                md={2}
                className="col col-2"
                style={{ backgroundColor: "rgb(132, 177, 41)" }}
              >
                <AiOutlineCheckCircle
                  style={{
                    color: "rgb(132, 177, 41)",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </Col>
              <Col
                md={3}
                className="col col-3"
                style={{ backgroundColor: "rgb(66, 15, 121)" }}
              >
                <LuContact
                  style={{
                    color: "rgb(66, 15, 121)",
                    backgroundColor: "white",
                    width: "40px",
                    height: "40px",
                    margin: "0px",
                  }}
                />
              </Col>
              <Col
                className="col col-1 offset-md-2 "
                style={{ backgroundColor: "rgb(104, 157, 209)" }}
              >
                <LuContact
                  style={{
                    color: "rgb(104, 157, 209)",
                    backgroundColor: "white",
                    width: "40px",
                    height: "40px",
                    margin: "0px",
                  }}
                />
              </Col>
              <Col
                className="col col-1 "
                style={{ backgroundColor: "rgb(243, 169, 41)" }}
              >
                <FaUserFriends className="first-icons item-color3" />
              </Col>
            </Row>
          </Container>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            boxSizing: "border-box",
            marginTop:"50px"
          }}
        >
          <div className="chart" >
            <Charts1  />
          </div>
          <div className="chart">
            <Charts2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
