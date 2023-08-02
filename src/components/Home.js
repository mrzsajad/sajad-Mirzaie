import React from "react";
import SideBar from "./SideBar";
import Main from "./Main";
import Header from "./Header";

const Home = () => {
    
  return (
    <div>
        <Header/>
      <div style={{ display: "flex" }}>
        <SideBar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
