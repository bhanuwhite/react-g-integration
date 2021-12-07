import React, { useState, useContext } from "react";
import _ from "lodash";
import DriveC from "./DriveC";
import TwitterC from "./TwitterC";
import ModalComponent from "./ModalComponent";
import { ContextProvider } from "../context";

const Main = () => {
  const { state} = useContext(ContextProvider);
   console.log(state, "aaaa");
  const [show, setShow] = useState({
    show: false,
    flag: "",
  });
  const getAllFiles = () =>
    _.size(_.get(state, "files", "")) ? _.get(state, "files", "") : [];

  const getFiles = () =>
    _.size(_.get(state, "files", ""))
      ? _.filter(
          _.get(state, "files", ""),
          (eachFile) => eachFile.mimeType === show.flag
        )
      : [];

  return (
    <>
      <div className="home-content">
        <div className="user-part m-2 pt-3">
          <TwitterC />
          <DriveC setShow={setShow} show={show} />
        </div>
      </div>

      <ModalComponent
        show={show}
        setShow={setShow}
        files={getFiles()}
        allfiles={getAllFiles()}
      />
    </>
  );
};

export default Main;
