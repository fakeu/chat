import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "./actions";

class EditMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.currentMessage(this.props.match.params.id);
  }

  componentWillReceiveProps(nexProps) {
    this.setState({
      text: nexProps.message.message
    });
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim().length > 0) {
      const message = {
        id: this.props.match.params.id,
        message: this.state.text
      };
      this.props.updateMessage(message);
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <form onSubmit={e => this.onSubmit(e)}>
            <textarea
              className="modal-textarea"
              value={this.state.text}
              onChange={e => {
                this.onChange(e);
              }}
            />
            <button>Save</button>
          </form>
          <button>
            <NavLink to="/">Cancel</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = rootState => ({
  message: rootState.edit.message
});

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMessage);
