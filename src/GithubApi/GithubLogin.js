import { useState, useEffect } from "react";
import axios from "axios";





const GITHUB_CLIENT_ID = "3d9a62acdac2de76bcb7";
const gitHubRedirectURL = "http://localhost:4000/api/auth/github";
const path = "/";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    (async function () {
      const usr = await axios
        .get(`http://localhost:4000/api/me`, {
          withCredentials: true,
        })
        .then((res) => res.data);
        axios.get(`${usr.repos_url}`)
        .then((res)=>{
          console.log(res.data,"repo res")
        })

        // console.log(axios.get(usr.repos_url).then((res)=>res),"repo")
      setUser(usr);
    })();
  }, []);

  return (
    <div className="App">
      {!user ? (
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}?path=${path}&scope=user:email`}
        >
          LOGIN WITH GITHUB
        </a>
      ) : (
        <h1>Welcome {user.login}</h1>
      )}
    </div>
  );
}

export default App;
