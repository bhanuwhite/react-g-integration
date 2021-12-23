import React, { useEffect, useState } from "react";

function GithubApi() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");

    setUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>my github profile</h3>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((e) => {
            return <div>{e.login}LOGIN<br /></div>;      
          })}
          <div className="col-10 col-md-4 mt-5"></div>
        </div>
      </div>
    </>
  );
}

export default GithubApi;
