import { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
    },
  };

  inputFirstNameHandler = (event) => {
    // console.log("event: ", event.target.value);
    this.setState((prevState, prevProps) => {
      return {
        form: {
          firstName: event.target.value,
          lastName: prevState.form.lastName,
        },
      };
    });
  };

  inputLastNameHandler = (event) => {
    // console.log("event: ", event.target.value);
    this.setState((prevState, prevProps) => {
      return {
        form: {
          firstName: prevState.form.firstName,
          lastName: event.target.value,
        },
      };
    });
  };

  render() {
    console.log("form: ", this.state.form);
    return (
      <div className="form">
        <form>
          <div className="form-input">
            <label>Name:</label>
            <input
              type="text"
              onChange={(e) => this.inputFirstNameHandler(e)}
            ></input>
          </div>
          <div className="form-input">
            <label>LastName:</label>
            <input
              type="text"
              onChange={(e) => this.inputLastNameHandler(e)}
            ></input>
          </div>
          <div className="form-actions">
            <button
              className="form-actions_off"
              onClick={(e) => {
                e.preventDefault();
                this.props.addUser(this.state.form, false);
              }}
            >
              Offline
            </button>
            <button
              className="form-actions_on"
              onClick={(e) => {
                e.preventDefault();
                this.props.addUser(this.state.form, true);
              }}
            >
              Online
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
