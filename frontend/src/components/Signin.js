import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { useHistory } from "react-router-dom";
import Layout from "./Layout";
import { authenticate as auths, isAuth } from "./helper";

const Signin = () => {
  const history = useHistory();

  const { authenticate, login, isAuthenticated, authError,user } = useMoralis();
  const [values, setValues] = useState({
    email: "",
    password: "",
    buttonText: "Submit",
  });

  const { email, password, buttonText } = values;

  const handleChange = (name) => (event) => {
    // console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = async (event) => {
    event.preventDefault();
    const signin = await login(email, password);
    console.log(user.get("Roles"));
    setValues({ email: "", password: "", buttonText: "Submit" });
    console.log(isAuthenticated);
    if (signin) {
      if (signin.className === "_User") {
        auths(isAuthenticated, () => {
          isAuth() && isAuth().role === "admin"
            ? history.push("/admin")
            : history.push("/");
        });
      }
    }
  };

  const signinForm = () => (
    <form>
      {authError && (
        <div class="alert alert-primary" role="alert">
          {authError.message}
        </div>
      )}
      <div className="form-group mt-30">
        <label className="text-muted">Email</label>
        <input
          onChange={handleChange("email")}
          value={email}
          type="email"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={handleChange("password")}
          value={password}
          type="password"
          className="form-control"
        />
      </div>

      <div>
        <button className="btn btn-primary" onClick={clickSubmit}>
          {buttonText}
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3 mt-20">
        {signinForm()}
        <br />
        <Link
          to="/auth/password/forgot"
          className="btn btn-sm btn-outline-danger"
        >
          Forgot Password
        </Link>
      </div>
    </Layout>
  );
};

export default Signin;
