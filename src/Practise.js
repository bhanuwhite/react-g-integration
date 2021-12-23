import React, { useEffect } from "react";
import axios from "axios";
import _ from "lodash";

const Practise = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(_.mapValues(res.data,"address.geo.lat"))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 
  return <div>Lodash</div>;
};
  
export default Practise;
 