import React, { useState, useContext } from "react";
import _ from "lodash";
import DriveC from "./DriveC";
import TwitterC from "./TwitterC";
import ModalComponent from "./ModalComponent";
<<<<<<< HEAD:src/components/Main.jsx
import { ContextProvider } from "../context";
import Github from "./Github";
=======
import { ContextProvider } from "../../context";
>>>>>>> b89d2cb15d625f6363526fd45982c364792beb57:src/pages/dashboard/Main.jsx

const Main = () => {
  const { state} = useContext(ContextProvider);
   console.log(state, "aaaa");
  const [show, setShow] = useState({
    show: false,
    flag: "",
<<<<<<< HEAD:src/components/Main.jsx
  });       
=======
  });
  const getAllFiles = () =>
    _.size(_.get(state, "files", "")) ? _.get(state, "files", "") : [];
>>>>>>> b89d2cb15d625f6363526fd45982c364792beb57:src/pages/dashboard/Main.jsx

  const getFiles = () =>
    _.size(_.get(state, "files", ""))
      ? _.filter(
          _.get(state, "files", ""),
          (eachFile) => eachFile.mimeType === show.flag
        )
<<<<<<< HEAD:src/components/Main.jsx
      : [];        
=======
      : [];

>>>>>>> b89d2cb15d625f6363526fd45982c364792beb57:src/pages/dashboard/Main.jsx
  return (
    <>
      <div className="home-content">
        <div className="user-part m-2 pt-3">
          <TwitterC />
          <DriveC setShow={setShow} show={show} />
          <Github />
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
        