import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  componentDidMount() {
    this.props.isUserLoggin();
  }

  onChangeLogin(e) {
    this.setState({ login: e.target.value });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const data = {
      login: this.state.login,
      password: this.state.password
    };
    this.props.loginUser(data);
  }

  render() {
    const { auth } = this.props;

    return (
      <div>
        {!auth ? (
          <form className="form" onSubmit={e => this.onSubmit(e)}>
            <input
              className=""
              onChange={e => this.onChangeLogin(e)}
              value={this.state.login}
              type="text"
              placeholder="Login"
            />
            <input
              className=""
              onChange={e => this.onChangePassword(e)}
              value={this.state.password}
              type="password"
              placeholder="Password"
            />
            <button className="">Login</button>
          </form>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

const mapStateToProps = rootState => ({
  auth: rootState.auth.auth,
  user: rootState.auth.user
});

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
