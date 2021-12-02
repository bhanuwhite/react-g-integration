import React from "react";
import TwitterLogin from "react-twitter-login";
const { REACT_APP_TWITTER_API_KEY } = process.env;
const { REACT_APP_TWITTER_API_KEY_SECRET } = process.env;

const TwitterLoginComponent = (props) => {
  const authHandler = (err, data) => {
    console.log(err, data, "twitterlogin");
  };

  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={REACT_APP_TWITTER_API_KEY}
      consumerSecret={REACT_APP_TWITTER_API_KEY_SECRET}
    />
  );
};

export default TwitterLoginComponent;
