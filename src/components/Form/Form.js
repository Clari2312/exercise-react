import { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
    },
  };

  componentDidMount() {
    console.log("pippo ", this.props);
    if (this.props.inEdit) {
      this.setState({
        form: {
          firstName: this.props.userInfo.userName,
          lastName: this.props.userInfo.userLastName,
        },
      });
    }
  }

  resetInputValueHandler = () => {
    const inputName = document.getElementById("form-input_name");
    const inputLastName = document.getElementById("form-input_lastname");
    inputName.value = "";
    inputLastName.value = "";
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
    console.log("form props: ", this.props);
    const { disableEvent, inEdit, userInfo, editUser } = this.props;

    return (
      <div className="form" style={{ width: inEdit ? "100%" : "50%" }}>
        <form>
          <div className="form-input">
            <label>Name:</label>
            <input
              id="form-input_name"
              type="text"
              onChange={(e) => this.inputFirstNameHandler(e)}
              defaultValue={inEdit ? userInfo.userName : ""}
            ></input>
          </div>
          <div className="form-input">
            <label>LastName:</label>
            <input
              id="form-input_lastname"
              type="text"
              onChange={(e) => this.inputLastNameHandler(e)}
              defaultValue={inEdit ? userInfo.userLastName : ""}
            ></input>
          </div>
          <div className="form-actions">
            <button
              className="form-actions_off"
              onClick={(e) => {
                e.preventDefault();

                if (inEdit) {
                  editUser(this.state.form, false, userInfo.index);
                  disableEvent();
                } else {
                  this.setState({
                    form: {
                      firstName: "",
                      lastName: "",
                    },
                  });
                  this.resetInputValueHandler();
                  this.props.addUser(this.state.form, false);
                }
              }}
            >
              Offline
            </button>
            <button
              className="form-actions_on"
              onClick={(e) => {
                e.preventDefault();
                if (inEdit) {
                  editUser(this.state.form, true, userInfo.index);
                  disableEvent();
                } else {
                  this.setState({
                    form: {
                      firstName: "",
                      lastName: "",
                    },
                  });
                  this.resetInputValueHandler();
                  this.props.addUser(this.state.form, true);
                }
              }}
            >
              Online
            </button>
            {inEdit ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  disableEvent();
                }}
              >
                Cancel
              </button>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
