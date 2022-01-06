import React,{useState} from "react";
// import TwitterLogin from "react-twitter-login";
import TwitterLogin from 'react-twitter-auth';
const { REACT_APP_TWITTER_API_KEY,REACT_APP_TWITTER_API_KEY_SECRET,REACT_APP_TWITTER_CLIENT_ID,REACT_APP_TWITTER_CLIENT_SECRET } = process.env;

const TwitterLoginComponent = (props) => {
 
  return (
    // <TwitterLogin
    //   authCallback={authHandler}
    //   consumerKey={REACT_APP_TWITTER_API_KEY}
    //   consumerSecret={REACT_APP_TWITTER_API_KEY_SECRET}
    // />
<div>
<button>Login With Twitter</button>
</div>
  );
};

export default TwitterLoginComponent;
