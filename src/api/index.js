import axios from "axios";
import { ISODateString } from "../helpers";

const { REACT_APP_Twitter_Api_Bearer_token, REACT_APP_USER_ID } = process.env;

export const getTweets = async () => {
  return await axios({
    method: "GET",
    url: `/users/${REACT_APP_USER_ID}/tweets`,
    headers: {
      Authorization: `Bearer ${REACT_APP_Twitter_Api_Bearer_token}`,
    },
  }).then((res) => res);

};


export const getRecentTweets = async (data) => {
    const {query,start_date} = data
    const formattedStartDate = ISODateString(start_date)
    return await axios({
      method: "GET",
      url: `/tweets/search/recent?query=${query}&start_time=${formattedStartDate}`,
      headers: {
        Authorization: `Bearer ${REACT_APP_Twitter_Api_Bearer_token}`,
      },
    }).then((res) => res);
  
  };

  export const getUserId = async () =>{
    return await axios({
      method: 'GET',
      url:``
    })

  }