import React from "react";
import $ from 'jquery';
import { Redirect } from "react-router";

class Login extends React.Component {
  constructor(props){//constructor
      super(props);//super class props
      this.state = { //initial state
        createNewAccount: false,
        loggedIn: true,
        apiResponse : "",
        today: new Date(),
      };

      this.toggleLayoutLogin = this.toggleLayoutLogin.bind(this);
      
  }
  render() {
    if(this.apiResponse != "" && this.apiResponse != undefined ) {
      // console.log("apiResponse");
      // console.log(this.apiResponse);
      if(this.loggedIn == true){
        Redirect("/");
      }
    }

    return (<div className="login">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
          { 
              this.state.createNewAccount
            ? 
              
            <form>
                <h1 className="h3  mb-3 fw-normal">Create a new Account !</h1>
                <label htmlFor="newAccountInput">Email address</label>
              <div className="form-floating">
                <input type="email" className="form-control" ref="Email" id="newAccountEmail"placeholder="name@example.com" />
              </div>
                <label htmlFor="newAccountUsername">Username</label>
              <div className="form-floating">
                <input type="text" className="form-control" ref="Username" id="newAccountUsername" placeholder="Username" />
              </div>
                <label htmlFor="newAccountPassword">Password</label>
              <div className="form-floating">
                <input type="password" className="form-control" ref="Password" id="newAccountPassword" placeholder="Password" />
              </div>
              <hr></hr>
              <button className="w-100 btn btn-lg btn-warning" onClick={this.createNewAccount}>Create</button>
              </form>
            :
            <form>
              <h1 className="h3  mb-3 fw-normal">Sign-in</h1>
                <label htmlFor="accountEmail">Email address</label>
              <div className="form-floating">
                <input type="email" className="form-control" id="accountEmail" placeholder="name@example.com" />
              </div>
                <label htmlFor="accountPassword">Password</label>
              <div className="form-floating">
                <input type="password" className="form-control" id="accountPassword" placeholder="Password" />
              </div>
              <div className="checkbox mb-3 ">
                <label><input type="checkbox" value="remember-me" /> Save</label>
              </div>
              <button className="w-100 btn btn-lg btn-warning" onClick={this.signIn}>Sign in</button>
            </form>
          }
          <p className="mt-5  mb-3 text-muted">{ this.state.createNewAccount
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
  
  createNewAccount=()=>{
    let newAccount={
      Email:this.refs.Email.value,
      Username:this.refs.Username.value,
      Password:this.refs.Password.value,
    };
  
    fetch(
      "https://localhost:44324/Accounts/CreateJson", 
      {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newAccount),
      }
    )
    .then(
      response => {
        return response.json()
      }
    )
    .then(
      json => {
        this.setState({
          apiResponse : json
        });
      }
    );
  }
  
  signIn=()=>{
    let loginAccount={
          Email:this.refs.Email.value,
          Username: "",
          Password:this.refs.Password.value,
        };
  
        fetch(
          "https://localhost:44324/Accounts/SignIn", 
          {
            method: 'POST',
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(loginAccount),
          }
        )
        .then(
          response => {
            return response.json();
          }
        )
        .then(
          json => {
            this.setState({
              apiResponse : json
            });
          }
        );
    }

  componentDidMount() {
  }
}

export default Login;