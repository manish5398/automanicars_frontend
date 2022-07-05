import React, { useState } from "react";
import swal from "sweetalert";

const LoginCard = () => {
  const [toggle, setToggle] = useState(false);

  const tog = () => {
    setToggle(!toggle);
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function loginUser(credentials) {
    console.log(credentials);
    return fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await loginUser({ email, password });
    console.log(response);

    if ("token" in response) {
      swal("Success", response.message, "success", {
        buttons: false,
        timer: 2000,
      }).then((value) => {
        localStorage.setItem("token", response["token"]);
        localStorage.setItem("user", JSON.stringify(response["user"]));
        window.location.href = "/profile";
      });
    } else {
      console.log(response.message);
      swal("Failed", response.message, "error");
    }
  };
  return (
    <>
      <div className="left-login">
        <h2 className="head-login">Login Form</h2>
        <div id="login">
          <form className="form" onSubmit={handleSubmit}>
            <p className="fieldset">
              <label className="image-replace email" for="signin-email">
                E-mail
              </label>
              <input
                className="full-width has-padding has-border"
                id="signin-email"
                type="email"
                placeholder="E-mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="error-message">
                An account with this email address does not exist!
              </span>
            </p>

            <p className="fieldset">
              <label className="image-replace password" for="signin-password">
                Password
              </label>
              <input
                className="full-width has-padding has-border"
                id="signin-password"
                type={toggle ? "text" : "password"}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <a href="#0" className="hide-password" onClick={tog}>
                {toggle ? "Hide" : "Show"}
              </a>
              <span className="error-message">Wrong password! Try again.</span>
            </p>

            <p className="fieldset">
              <input type="checkbox" id="remember-me" checked />
              <label for="remember-me"> Remember me</label>
            </p>

            <p className="fieldset">
              <input className="full-width" type="submit" value="Login" />
            </p>

            <p className="form-bottom-message">
              <a href="#0">Forgot your password?</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
