import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CgProfile } from "react-icons/cg";
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
const labels = [
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
  "آبان",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: [],

      backgroundColor: "#4b5e83",
      borderColor: "#4b5e83",
      data: [
        0, 10, 5, 2, 20, 30, 45, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45,
        10, 5, 2, 20, 30, 45,
      ],
    },
  ],
};

const Charts1 = () => {
  return (
    <div>
      <div style={{ textAlign: "right", height: "80px" }}>
        <p style={{ color: "blue", margin: "0px 10px 0px 0px " }}>
          <b>مبالغ هزینه شده در 30 روز گذشته</b>
        </p>
        <p style={{ color: "blue", margin: "0px 10px 0px 0px " }}>
          <b>مبلغ هزینه دلاری در 30 روز گذشته</b>
        </p>
        <p style={{ color: "blue", margin: "0px 10px 0px 0px " }}>
          <b>مبلغ هزینه شده بیتکوین در 30 روز گذشته</b>
        </p>
      </div>
      <Line data={data} />
      <div
        style={{
          margin: "10px",
          display: "flex",
          color: "gray",
          justifyContent: "space-between",
        }}
      >
        <div style={{ margin: "10px", display: "flex", color: "gray" }}>
          <p>آخرین گفتگو توسط </p>
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

export default Charts1;
