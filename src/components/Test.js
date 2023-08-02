import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProgressBar from "@ramonak/react-progress-bar";
import "../components/Test.css"
const Test = () => {
    
  return (
    <div style={{margin:"10px"}}>
      <p style={{textAlign:"right"}}>محتوای استفاده شده</p>
      <ProgressBar 
       className="wrapper"
      //  barContainerClassName="container"
      //  completedClassName="barCompleted"
      //  labelClassName="label"
       completed={180}
       maxCompleted={200} 
       />
    </div>
  );
};

export default Test;
