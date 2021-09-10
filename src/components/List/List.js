import { Component, useState } from "react";
import "./List.css";
import FormComponent from "../Form/Form";
import Card from "./Card/Card";

const List = (props) => {
  // class List extends Component {

  // state = {
  //   onEdit: false,
  //   userInfoOnEdit: {
  //     userName: "",
  //     userLastName: "",
  //     status: false,
  //     index: null,
  //   },
  // };
  // --> this.setState()

  // [listState, setListState ]
  // il primo corrisponde allo stato => this.state ---> listState
  // il secondo la funzione per aggiornare lo stato => this.setState ---> setListState
  const [listState, setListState] = useState({
    onEdit: false,
    userInfoOnEdit: {
      userName: "",
      userLastName: "",
      status: false,
      index: null,
    },
  });

  // function activeEditHandler(...args) { ... }
  const activeEditHandler = (userName, userLastName, status, positionIndex) => {
    // this.setState({
    //   onEdit: true,
    //   userInfoOnEdit: {
    //     userName: userName,
    //     userLastName: userLastName,
    //     status: status,
    //     index: positionIndex,
    //   },
    // });

    setListState({
      onEdit: true,
      userInfoOnEdit: {
        userName: userName,
        userLastName: userLastName,
        status: status,
        index: positionIndex,
      },
    });
  };

  console.log("actual state...", listState);

  const disableEditHandler = () => {
    // this.setState({
    //   onEdit: false,
    //   userInfoOnEdit: {
    //     userName: "",
    //     userLastName: "",
    //     status: false,
    //     index: null,
    //   },
    // });
    setListState({
      onEdit: false,
      userInfoOnEdit: {
        userName: "",
        userLastName: "",
        status: false,
        index: null,
      },
    });
  };

  // render() {
  // console.log("props:", this.props);
  //console.log("cardList:", this.props);
  const { editUser } = props;

  const cardList = props.infoUsers.map((element, index) => {
    return (
      <Card
        key={element + index}
        // editEvent={this.activeEditHandler}
        editEvent={activeEditHandler}
        infoUser={element}
        positionIndex={index}
        removeUser={props.removeUser}
      />
    );
  });

  return (
    <div className="list">
      {/* {this.state.onEdit ? ( */}
      {listState.onEdit ? (
        <FormComponent
          inEdit={true}
          editUser={editUser}
          // disableEvent={this.disableEditHandler}
          disableEvent={disableEditHandler}
          // userInfo={this.state.userInfoOnEdit}
          userInfo={listState.userInfoOnEdit}
        />
      ) : null}
      {cardList}
    </div>
  );
  // }
};

export default List;
