import React from "react";
import { Redirect } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as actions from "./actions";

import Header from "../../components/Header/index";
import Message from "../../components/Message/index";
import Preloader from "../../components/Preloader/index";
import Form from "../../components/Form/index";
import User from "../../components/User/index";
import { idGenerator, currentDate } from "../../helpers";
import "./App.css";

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.sendMessage = this.sendMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages();
    this.props.fetchUsers();
  }

  deleteMessage(id) {
    this.props.deleteMessage(id);
  }

  sendMessage(text) {
    const { user } = this.props;
    const message = {
      id: idGenerator().toString(),
      user: user.user,
      avatar: user.avatar,
      admin: user.admin,
      created_at: currentDate(),
      message: text,
      marked_read: false
    };
    this.props.addMessage(message);
  }

  render() {
    const { messages = [], users = [], loading } = this.props;
    const msgLength = messages.length;

    return (
      <div>
        {!this.props.auth ? <Redirect to="/login" /> : false}
        {loading ? (
          <Preloader />
        ) : (
          <div>
            <Header
              name="Binary-chat"
              usersCount={users.length}
              msgCount={msgLength}
              lastMsg={messages[0].created_at}
              admin={this.props.user.admin}
            />
            <Form onSendMessage={this.sendMessage} />
            <div className="main-wrapper">
              <div className="chat-wrapper">
                {messages.map(msg => {
                  const self = msg.user === this.props.user.user;

                  return (
                    <Message
                      key={msg.id}
                      id={msg.id}
                      avatar={msg.avatar}
                      created_at={msg.created_at}
                      message={msg.message}
                      user={msg.user}
                      self={self}
                      onDeleteMessage={this.deleteMessage}
                    />
                  );
                })}
              </div>
              <div className="user-wrapper">
                {users.map(user => {
                  return (
                    <User
                      key={user.id}
                      id={user.id}
                      avatar={user.avatar}
                      user={user.user}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Chat.propTypes = {};

Chat.defaultProps = {};

const mapStateToProps = rootState => ({
  messages: rootState.chat.messages,
  users: rootState.chat.users,
  loading: rootState.chat.loading,
  auth: rootState.auth.auth,
  user: rootState.auth.user
});

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
