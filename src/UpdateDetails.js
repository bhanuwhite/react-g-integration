import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Result } from 'antd';
const {REACT_APP_API_URL} = process.env;

function UpdateDetails() {

        const [users, setUsers] = useState({
          data:[],
          error:false,
          Loading:false
        });
        const getUsers = async () => {
          const response = await fetch(`${REACT_APP_API_URL}/user/getUsers`);
          setUsers(await response.json());
        };
        useEffect(() => {
          getUsers();
        }, []);
    // function updatePost() {
       
    //     axios.put(`${REACT_APP_API_URL}user/updateUser`)
    //      .then((res) =>{
    //        console.log(res)
    //      }) 

    //      .catch((err) =>{
    //        console.log(err)
    //      })
    //    }
    // useEffect(() => {
    //   updatePost();
    // }, [])
    return (
        <>
          <h3>my github profile</h3>
          <div className="container-fluid mt-5">
            <div className="row text-center">
              {Object.keys(users).map((e) => {
                return<ul>
                    <li>
                    ({e._id})
                    </li>
                </ul> 
              })}
             
            </div>
          </div>
        </>
      );
            }

export default UpdateDetails

