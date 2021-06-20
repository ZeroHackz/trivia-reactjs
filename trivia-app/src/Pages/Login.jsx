import React from "react";
import $ from 'jquery';

class Login extends React.Component {
  constructor(props){//constructor
      super(props);//super class props
      this.state = { //initial state
        createNewAccount: true,
        today: new Date(),
      };

      this.toggleLayoutLogin = this.toggleLayoutLogin.bind(this);
      
  }
  render() {
    return (<div className="login">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          { 
              this.state.createNewAccount
            ? 
              <div>
                <h2>Create a new Account!</h2>
                <p>
                  <label>Account ID : <input type="text"  ref="Id" value="new" disabled ></input></label>
                </p>
                <p>
                  <label>Please enter your e-mail : <input placeholder="E-mail" type="email" ref="Email"></input></label>
                </p>
                <p>
                  <label>Enter an account username : <input placeholder="Username" type="text" ref="Username"></input></label>
                </p>
                <p>
                  <label>Use a secure password : <input placeholder="Password" type="password" ref="Password"></input></label>
                </p>
                <p>
                  <label>Creation date:<input type="text" ref="CreatedAt" value={ this.state.today.toISOString() } disabled ></input></label>
                </p>
              </div>
            :
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
            </form>
          }
          <p class="mt-5  mb-3 text-muted">{ this.state.createNewAccount
              ? 'Already have one account? Sign-in'
              :'No account? Create one'} <a href="#" onClick={this.toggleLayoutLogin}>here</a></p>
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
    </div>);
  }
  
  toggleLayoutLogin(){
    this.setState({
      createNewAccount: !this.state.createNewAccount,   
     });
  }

createAccount(account){
  
  fetch(
    {
      "Id":"naisu",
      "Email":"testemail@testemail.com",
      "Username":"bob",
      "Password":"bob",
      "LastLogin":"2019-01-19T19:51:00",
      "CreatedAt":"2021-04-07T17:51:00"
    }, 
    {
    method: 'POST',
    body: JSON.stringify({
      title: 'New title added',
      body: 'New body added. Hello body.',
      userId: 2
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({
        user:json
      });
    });
  }

  componentDidMount() {
  }
}

export default Login;