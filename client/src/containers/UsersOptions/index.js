import React from "react";
import { connect } from "react-redux";

import { Route, Redirect } from "react-router-dom";

class UsersOptions extends React.Component {
  componentDidMount() {}

  render() {
    console.log(this.props);
    return (
      <div className="fill">
        <div>ADD USER</div>
      </div>
    );
  }
}
UsersOptions.propTypes = {};

UsersOptions.defaultProps = {};

const mapStateToProps = rootState => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersOptions);
