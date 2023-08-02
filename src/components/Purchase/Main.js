import React, { useMemo, useState } from "react";
import "../Purchase/Main.css";
import { Col, Container, Pagination, Row, Table } from "react-bootstrap";
import { FiRefreshCcw } from "react-icons/fi";
import { AiFillFilter } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { AiOutlineCloseSquare } from "react-icons/ai";

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
const Main = ({data}) => {
  const [staticData,setStaticData]=useState(data);
  const [page, setPage] = useState(1);
  const pageinate = useMemo(() => {
    const help = [];
    for (let index = 0; index < staticData.length / 7; index++) {
      help.push(index + 1);
    }
    return help;
  }, [staticData]);
  
  return (
    <div className="main-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="serach-bar">
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              marginLeft: "10px",
            }}
          >
            <b>جستجو</b>
          </p>
          <input type="text" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <b>فیلتر فوری:</b>
          </div>

          <div
            name="f1"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "15px" }}>
              <label>محصولات منقضی شده</label>
              <input type="checkbox" id="c1" name="" value="" />
            </div>
            <div style={{ marginLeft: "15px" }}>
              <label>محصولات فعال</label>
              <input type="checkbox" id="c2" name="" value="" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "white",
                backgroundColor: "orange",
                height: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <AiFillFilter
                style={{
                  color: "white",
                  backgroundColor: "orange",
                  height: "100%",
                  marginRight: "5px",
                }}
              />
              <p>اعمال فیلتر</p>
            </div>
            <select
              name="cars"
              id="cars"
              style={{
                backgroundColor: "orange",
                color: "white",
                marginLeft: "5px",
                width: "30px",
                height: "30px",
                border: "0px",
              }}
            >
              <option></option>
              <option value="a">1</option>
              <option value="b">2</option>
              <option value="c">3</option>
            </select>
            <div style={{ backgroundColor: "rgb(56, 56, 159)", margin: "5px" }}>
              <FiRefreshCcw
                style={{
                  backgroundColor: "rgb(56, 56, 159)",
                  color: "white",
                  height: "25px",
                  width: "25px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Container fluid>
          <Row >
            <Col className="a col-2 ">تاریخ</Col>
            <Col className="a col-1 ">مبلغ</Col>
            <Col className="a col-2 ">کاربر</Col>
            <Col
              className="a col-3 "
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {" "}
              <div>توضیحات</div>
              <div style={{ fontSize: "20px" }}>
                {" "}
                <b>+</b>
              </div>
            </Col>
            <Col className="a col-4 "></Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container fluid style={{ backgroundColor: "rgb(239, 238, 238)" }}>
          <Row
            style={{
              height: "60px",
              alignItems: "center",
              justifyContent: "flex-start",
              textAlign: "center",
            }}
          >
            <Col
              md={{ span: 2, offset: 3 }}
              style={{
                height: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                textAlign: "center",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginLeft: "15px",
                }}
              >
                <AiFillFilter
                  style={{
                    fontSize: "20px",
                    color: "white",
                    backgroundColor: "rgb(56, 56, 159)",
                  }}
                />
                <AiOutlineCloseSquare
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    fontSize: "20px",
                  }}
                />
              </div>
              <span>
                {todayFa.year}/{todayFa.month}/{todayFa.day}
              </span>
              <SlCalender style={{ marginRight: "15px" }} />
            </Col>
            <Col
              md={{ span: 3, offset: 3 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                textAlign: "center",
                backgroundColor: "white",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <AiFillFilter
                  style={{
                    fontSize: "20px",
                    color: "white",
                    backgroundColor: "rgb(56, 56, 159)",
                  }}
                />
                <AiOutlineCloseSquare
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    fontSize: "20px",
                  }}
                />
              </div>
            </Col>
          </Row>
          {/* <Table striped bordered hover> */}
          
        </Container>
                  <div style={{height:"400px"}}>

                  
    <Table striped bordered hover  >
      <thead>
      </thead>
      <tbody>
      {staticData.slice((page - 1) * 7, page * 7).map((item, index) => { 
          return (
          
      <tr key={index}>
          <td  style={{width:"16.6%"}}>{item.date}</td>
          <td  style={{width:"8.5%"}}>{item.price}</td>
          <td  style={{width:"16.6%"}}>{item.user}</td>
          <td  style={{width:"25.%"}}>{item.description}</td>
          <td >{item.details}</td>
        </tr>
          )
        })}
        
        
      </tbody>
      
    </Table >
    </div>
    <div style={{display:"flex",flexDirection:"column"}}>
    <Pagination style={{display:"flex",justifyContent:"center",padding:"0px"}}>
        <Pagination.First onClick={() => setPage(1)} />
        <Pagination.Prev
          onClick={() => {
            if (page > 1) {
              setPage((last) => last - 1);
            }
          }}
        />
        {pageinate.map((item, index) => {
          return (
            <Pagination.Item
              key={index}
              active={page === item}
              onClick={() => setPage(item)}
            >
              {item}
            </Pagination.Item>
          );
        })}

        <Pagination.Next
          onClick={() => {
            if (page < pageinate[pageinate.length-1]) {
              {
                setPage((last) => last + 1);
              }
            }
          }}
        />
        <Pagination.Last
          onClick={() => setPage(pageinate[pageinate.length - 1])}
        />
        
      </Pagination>
      <p> نمایش : {(page-1)*7+1} تا {(page*7)} از {pageinate.length*7} |  صفحه ی {page} از {pageinate.length}</p>
      </div>
      </div>
      <div></div>
    </div>
  );
};

export default Main;
