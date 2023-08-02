import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CgProfile } from "react-icons/cg";
const BarChart = () => {
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
  const labels = ["ریال", "بیت کوین", "دلار"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: [],
        data: [10, 7, 5],
        backgroundColor: ["#448fcd", "rgb(243, 169, 41);", "gray"],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        // borderWidth: "2",
      },
    ],
  };
  return (
    <div style={{ backgroundColor: "" }}>
      <div style={{ textAlign: "right", height: "80px" }}>
        <p style={{ color: "blue", margin: "0px 10px 0px 0px " }}>
          <b>مبلغ موجودی ریال</b>
        </p>
        <p style={{ color: "blue", margin: "0px 10px 10px 0px " }}>
          <b>مبلغ موجودی دلار</b>
        </p>
      </div>
      <p
        style={{
          color: "blue",
          margin: "10px 10px 0px 0px ",
          textAlign: "right",
          position: "absolute",
          zIndex: "1",
        }}
      >
        <b>مبلغ موجودی بیت کوین</b>
      </p>
      <div style={{margin:"0px 0px 0px 0px"}}>
        <Bar
          data={data}
          style={{ border: "1px solid black", margin: "14px 10px 10px 10px" }}
        />
      </div>
      <div
        style={{
          margin: "0px 10px 0px 0px",
          display: "flex",
          color: "gray",
          justifyContent: "space-between",
        }}
      >
        <div style={{ margin: "10px", display: "flex", color: "gray" }}>
          <p>آخرین نامه ارسال شده توسط </p>
          <CgProfile className="left-icon" />
          <p>{person[Math.floor(Math.random() * 4)].name}</p>
        </div>
        <div style={{ margin: "10px", display: "flex", color: "gray" }}>
          <p>زمان :در 3 ساعت</p>
        </div>
      </div>

    </div>
  );
};

export default BarChart;
