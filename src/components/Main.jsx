import React from "react";
import DriveC from "./DriveC";
import TwitterC from "./TwitterC";

const Main = () => {
  return (
    <>
      <div className="home-content">
        <div className="user-part m-2 pt-3">
          <TwitterC />
          <DriveC />
        </div>
      </div>
    </>
  );
};

export default Main;
