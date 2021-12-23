import React,{useState} from "react";
// import TwitterLogin from "react-twitter-login";
import TwitterLogin from 'react-twitter-auth';
const { REACT_APP_TWITTER_API_KEY,REACT_APP_TWITTER_API_KEY_SECRET,REACT_APP_TWITTER_CLIENT_ID,REACT_APP_TWITTER_CLIENT_SECRET } = process.env;

const TwitterLoginComponent = (props) => {
  const authHandler = (err, data) => {
    console.log(err, data, "twitterlogin");
  };
// const TwitterLoginComponent = () =>{

// const [data, setData] = useState("")
//  const twitterResponse = (response) => {
//     const token = response.headers.get('x-auth-token');
//     response.json().then(user => {
//         if (token) {
//             setData({isAuthenticated: true, user, token});
//         }
//     });
// };
// const onFailure = (err) =>{
//   console.log(err,"err")
// }

  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={REACT_APP_TWITTER_API_KEY}
      consumerSecret={REACT_APP_TWITTER_API_KEY_SECRET}
    />
//     <TwitterLogin loginUrl="http://localhost:4000/api/v1/auth/twitter"
//     onFailure={onFailure} onSuccess={twitterResponse}
//     requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse">
//       <b>Custom</b> Twitter <i>Login</i> content
// </TwitterLogin>
  );
};

export default TwitterLoginComponent;
