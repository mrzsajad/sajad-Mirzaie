import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../Purchase/Purchase.css";

import Header from "./Header";
import Main from "./Main";

const Purchase = () => {
  
  let details = [
    {
      date: "2023/31/07",
      price: "123434 تومان",
      user: "ادمین",
      description: "خرید اکانت",
      details: "جزییات سفارش",
    },
    {
      date: "2023/30/07",
      price: "123233 تومان",
      user: "ادمین",
      description: "خرید اکانت",
      details: "جزییات سفارش",
    },
    {
      date: "2023/28/07",
      price: "1123333 تومان",
      user: "ادمین",
      description: "خرید اکانت",
      details: "جزییات سفارش",
    },
    {
      date: "2023/31/07",
      price: "1122233 تومان",
      user: "ادمین",
      description: "خرید سرور",
      details: "جزییات سفارش",
    },
    {
      date: "2023/25/07",
      price: "33332221 تومان",
      user: "ادمین",
      description: "خرید اکانت",
      details: "جزییات سفارش",
    },
    {
      date: "2023/21/07",
      price: "123123123 تومان",
      user: "ادمین",
      description: "خرید سرور",
      details: "جزییات سفارش",
    },
    {
      date: "2023/15/07",
      price: "11223344 تومان",
      user: "ادمین",
      description: "خرید اکانت",
      details: "جزییات سفارش",
    },
    {
      date: "2023/14/07",
      price: "12312333 تومان",
      user: "ادمین",
      description: "خرید سرور",
      details: "جزییات سفارش",
    },
    {
      date: "2023/13/07",
      price: "23223333 تومان",
      user: "ادمین",
      description: "خرید شماره مجازی",
      details: "جزییات سفارش",
    }
    ,
    {
      date: "2023/13/07",
      price: "23223333 تومان",
      user: "ادمین",
      description: "خرید شماره مجازی",
      details: "جزییات سفارش",
    }
    ,
    {
      date: "2023/13/07",
      price: "23223333 تومان",
      user: "ادمین",
      description: "خرید شماره مجازی",
      details: "جزییات سفارش",
    }
    ,
    {
      date: "2023/13/07",
      price: "23223333 تومان",
      user: "ادمین",
      description: "خرید شماره مجازی",
      details: "جزییات سفارش",
    },
    {
      date: "2023/24/07",
      price: "11233333 تومان",
      user: "ادمین",
      description: "خرید اکانت",
      details: "جزییات سفارش",
    },
    {
      date: "2023/23/07",
      price: "-222233 تومان",
      user: "ادمین",
      description: "خرید سرور",
      details: "جزییات سفارش",
    },
    {
      date: "2023/26/07",
      price: "-3123123 تومان",
      user: "ادمین",
      description: "خرید سرور",
      details: "جزییات سفارش",
    },
    {
      date: "2023/13/07",
      price: "-223333 تومان",
      user: "ادمین",
      description: "خرید شماره مجازی",
      details: "جزییات سفارش",
    }
    ,
    {
      date: "2023/13/07",
      price: "-223333 تومان",
      user: "ادمین",
      description: "خرید شماره مجازی",
      details: "جزییات سفارش",
    },
    {
      date: "2023/24/07",
      price: "-233333 تومان",
      user: "ادمین",
      description: "خرید اکانت",
      details: "جزییات سفارش",
    },
    {
      date: "2023/23/07",
      price: "-2222233 تومان",
      user: "ادمین",
      description: "خرید سرور",
      details: "جزییات سفارش",
    },
    {
      date: "2023/26/07",
      price: "-123123 تومان",
      user: "ادمین",
      description: "خرید سرور",
      details: "جزییات سفارش",
    },
  ];
  const [data, setData] = useState(details);

// console.log(data)
  return (
    <div>
      <Header />
      <Main data={data}/>
    </div>
  );
};

export default Purchase;
