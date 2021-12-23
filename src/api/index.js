import axios from "axios";
import { ISODateString } from "../helpers";

const { REACT_APP_TWITTER_API_BEARER_TOKEN, REACT_APP_USER_ID } = process.env;

export const getTweets = async () => {
  return await axios({
    method: "GET",
    url: `/users/${REACT_APP_USER_ID}/tweets`,
    headers: {
      Authorization: `Bearer ${REACT_APP_TWITTER_API_BEARER_TOKEN}`,
    },
  }).then((res) => res);
};

export const getRecentTweets = async (data) => {
  const { query, start_date } = data;
  const formattedStartDate = ISODateString(start_date);
  return await axios({
    method: "GET",
    url: `/tweets/search/recent?query=${query}&start_time=${formattedStartDate}&expansions=attachments.media_keys&media.fields=url`,
    headers: {
      Authorization: `Bearer ${REACT_APP_TWITTER_API_BEARER_TOKEN}`,
    },
  }).then((res) => {
    console.log(res, "res");
    return res;
  });
};

export const getUserId = async () => {
  return await axios({
    method: "GET",
    url: ``,
  });
};
