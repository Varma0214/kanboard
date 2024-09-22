import React from "react";
import "../Dashboard/Dashboard.css";
import Card from "../Card/Card";

function Dashboard() {
  return (
    <div className="dbmain">
      <div className="section1">
        <div className="leftview">
          <div className="dot"></div>
          <h5 > Fav wala kaam</h5>
          <h5 className="heading">3</h5>
          <h4>+</h4>
          <h4>...</h4>
        </div>
        <div className="rightview">
            <div>
                <Card/>
            </div>
            <div>
                <Card/>
            </div>
            {/* <Card/>
            <Card/> */}
        </div>
      </div>
      <div className="section2">
        <div></div>
        <div></div>
      </div>
      <div className="section3">
        <div></div>
        <div></div>
      </div>
      <div className="section4">
        <div></div>
        <div></div>
      </div>
      
    </div>
  );
}

export default Dashboard;
