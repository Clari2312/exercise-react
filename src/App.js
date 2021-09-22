import logo from "./logo.svg";
import "./App.css";
import { Component, useState } from "react";
import { FormComponent, ListComponent } from "./components";
import { Stack } from "@mui/material";

// class App extends Component
const App = (props) => {
  //function App() {
  // state = {
  //   userList: [
  //     {
  //       userName: "Clarissa",
  //       userLastName: "Mascalchi",
  //       status: true,
  //     },
  //   ],
  // };
  const [userList, setUserList] = useState([
    {
      userName: "Clarissa",
      userLastName: "Mascalchi",
      status: true,
    },
  ]);

  const removeUserHandler = (index) => {
    console.log("Remove user...");
    setUserList((prevState, prevProps) => {
      const newUserList = [...prevState];
      newUserList.splice(index, 1);
      return [...newUserList];
    });
  };

  // addUserHandler = (formValues, status) => {
  const addUserHandler = ({ firstName, lastName }, status) => {
    console.log("adding user...");
    //const { firstName, lastName } = formValues;
    setUserList((prevState, prevProps) => {
      const newList = [...prevState];
      newList.push({
        userName: firstName,
        userLastName: lastName,
        status: status,
      });

      return [...newList];
    });
  };

  const editUserHandler = (newUserInfo, status, userIndex) => {
    // console.log("newUserInfo ", newUserInfo);
    // console.log("status ", status);
    // console.log("userIndex ", userIndex);
    let newList = [...userList];
    newList[userIndex] = {
      userName: newUserInfo.firstName,
      userLastName: newUserInfo.lastName,
      status: status,
    };
    setUserList([...newList]);
  };

  // render() {
  return (
    <Stack direction="row">
      <FormComponent addUser={addUserHandler} />
      <ListComponent
        editUser={editUserHandler}
        infoUsers={userList}
        removeUser={removeUserHandler}
      />
    </Stack>
  );
  // }
};

export default App;
