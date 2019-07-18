import React from "react";

class EditMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ text: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.text.trim().length > 0) {
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
        </div>
      </div>
    );
  }
}

export default EditMessage;
