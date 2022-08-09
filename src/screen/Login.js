import React from "react";
import Util from "../components/util/Util";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    //this.setParams = this.setParams.bind(this) ;
    this.login = this.login.bind(this);
  }

  setParams = (event) => {
    this.setState({ [event.target.name]: event.target.value.trim() });
  };

  login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      userName: this.state.username,
      password: this.state.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(Util.URL_REST + "api/authenticate", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        localStorage.setItem("token", result.jwt);
        localStorage.setItem("userDetail", JSON.stringify(result.userDetail));
        window.location.href = Util.URL + "home";
      })
      .catch((error) => {
        console.log("error", error);
        Util.swal("", "UserName or Password are Wrong ", "error");
      });
  };
  render() {
    return (
      <div className="content-wrapper">
        <section class="content">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h1">
                <b>VISA-LOGIN</b>
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form action="../../index3.html" method="post">
                <div className="input-group mb-3">
                  <input
                    onChange={this.setParams}
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="UserName"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    onChange={this.setParams}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
              </form>
              <div className="social-auth-links text-center mt-2 mb-3">
                <a href="#" className="btn btn-block btn-primary">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={this.login}
                  >
                    Sign In
                  </button>
                </a>
              </div>
              {/* /.social-auth-links */}
            </div>
            {/* /.card-body */}
          </div>
        </section>
      </div>
    );
  }
}
