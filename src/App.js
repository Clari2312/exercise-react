import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { FormComponent, ListComponent } from "./components";

class App extends Component {
  //function App() {
  state = {
    userList: [],
  };

  removeUserHandler = (index) => {
    console.log("Remove user...");
    this.setState((prevState, prevProps) => {
      const newUserList = [...prevState.userList];
      newUserList.splice(index, 1);
      return {
        userList: newUserList,
      };
    });
  };

  // addUserHandler = (formValues, status) => {
  addUserHandler = ({ firstName, lastName }, status) => {
    console.log("adding user...");
    //const { firstName, lastName } = formValues;
    this.setState((prevState, prevProps) => {
      const newList = [...prevState.userList];
      newList.push({
        userName: firstName,
        userLastName: lastName,
        status: status,
      });

      return {
        userList: newList,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <FormComponent addUser={this.addUserHandler} />
        <ListComponent
          infoUsers={this.state.userList}
          removeUser={this.removeUserHandler}
        />
      </div>
    );
  }
}

export default App;
