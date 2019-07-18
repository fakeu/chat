import React from "react";
import { connect } from "react-redux";

class UsersOptions extends React.Component {
  render() {
    return <div>USERS OPTIONS</div>;
  }
}

const mapStateToProps = rootState => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersOptions);
