function Login() {
  return (<div className="content-wrapper">
    <section class="content">
    <div className="card card-outline card-primary">
        <div className="card-header text-center">
          <a href="../../index2.html" className="h1"><b>VISA-LOGIN</b></a>
        </div>
        <div className="card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form action="../../index3.html" method="post">
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
          </form>
          <div className="social-auth-links text-center mt-2 mb-3">
            <a href="#" className="btn btn-block btn-primary">
              <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </a>
          </div>
          {/* /.social-auth-links */}
        </div>
        {/* /.card-body */}
      </div>
    </section>
  </div>)
}
export default Login