import React from "react";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <form>
              <h1 class="h3  mb-3 fw-normal">Sign-in</h1>
              <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
              </div>

              <div class="checkbox mb-3 ">
                <label><input type="checkbox" value="remember-me" /> Save</label>
              </div>
              <button class="w-100 btn btn-lg btn-warning" type="submit">Sign in</button>
              <p class="mt-5  mb-3 text-muted">No account? Create one <a href="#">here</a></p>
            </form>

          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Sign-in with your account</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;