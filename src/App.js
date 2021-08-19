import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { FormComponent, ListComponent } from "./components";

class App extends Component {
  //function App() {
  state = {
    userList: [
      {
        userName: "Clarissa",
        userLastName: "Mascalchi",
        status: true,
      },
      {
        userName: "Minnie",
        userLastName: "Topolino",
        status: false,
      },
      {
        userName: "paperino",
        userLastName: "qui",
        status: true,
      },
    ],
  };

  addUserHandler = (formValues, status) => {
    console.log("adding user...");
    this.setState((prevState, prevProps) => {
      const newList = [...prevState.userList];
      newList.push({
        userName: formValues.firstName,
        userLastName: formValues.lastName,
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
        <ListComponent infoUsers={this.state.userList} />
      </div>
    );
  }
}

export default App;
