import React,{useState,useEffect} from "react";
import "./Login.css";

const LoginUi = () => {
  const initialState = {
    email: "",
    password: "",
  }
  const [Data, setData] = useState([]);
  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    function auth(){
      const reg = JSON.parse(localStorage.getItem('users'));
     return Boolean( reg.find((eachUser) => {
       return eachUser.email===formData.email && eachUser.password === formData.password
      })
     )
  }
auth();
console.log(auth(),"useEffect done")
});
  const { email, password } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  console.log(formData,"formData");
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...Data, formData]);
    setFormData(initialState);
  };
  console.log(Data,"Data");

 //console.log(JSON.parse(localStorage.getItem('users')),"JsonData");
  return (
    <>
      <div className="container" id="container">
        <div
          className="form-container sign-in-container"
          id="sign-in-container"
        >
          <form action="#">
            <h1>Sign in</h1>
            <span>or use your account</span>
            <div className="input-field">
              <div className="svg-container start">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
                value={email}
              />
            </div>
            <div className="input-field">
              <div className="svg-container start">
                <i className="fad fa-lock"></i>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={password}
              />
            </div>

            <a href="#">Forgot your password?</a>
            <button type="button" onClick={handleSubmit} >
              Sign In
            </button>
          
            <a id="mobile-up" name="signup" >
              Sign Up <i className="fa fa-arrow-right"></i>
            </a>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>New here ?</h1>
              <br />

              <button
                className="ghost"
                id="signUp"
                name="signup"
                type="button"
                value="signup"
                
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginUi;
