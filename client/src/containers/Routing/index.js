import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Chat from "../Chat";
import Login from "../Login";
import EditMessage from "../EditMessage";
import UsersOptions from "../UsersOptions";
import NotFound from "../../pages/NotFound";

class Routing extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="fill">
        <main className="fill">
          <Switch>
            <Route exact path="/" component={Chat} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/options" component={UsersOptions} />
            <Route path="/edit/:id" component={EditMessage} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

Routing.propTypes = {};

Routing.defaultProps = {};

const mapStateToProps = rootState => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routing);
