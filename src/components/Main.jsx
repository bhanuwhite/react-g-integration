import React, { useState, useContext } from "react";
import _ from "lodash";
import DriveC from "./DriveC";
import TwitterC from "./TwitterC";
import ModalComponent from "./ModalComponent";
import { ContextProvider } from "../context";

const Main = () => {
  const { state, setState } = useContext(ContextProvider);
  console.log(state, "aaaa");
  const [show, setShow] = useState({
    show: false,
    flag: "",
  });

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

      <ModalComponent show={show.show} setShow={setShow} files={getFiles()} />
    </>
  );
};

export default Main;
