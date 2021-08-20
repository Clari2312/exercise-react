import { Component } from "react";
import "./List.css";
import FormComponent from "../Form/Form";
import Card from "./Card/Card";

class List extends Component {
  state = {
    onEdit: false,
    userInfoOnEdit: {
      userName: "",
      userLastName: "",
      status: false,
      index: null,
    },
  };

  activeEditHandler = (userName, userLastName, status, positionIndex) => {
    this.setState({
      onEdit: true,
      userInfoOnEdit: {
        userName: userName,
        userLastName: userLastName,
        status: status,
        index: positionIndex,
      },
    });
  };

  disableEditHandler = () => {
    this.setState({
      onEdit: false,
      userInfoOnEdit: {
        userName: "",
        userLastName: "",
        status: false,
        index: null,
      },
    });
  };

  render() {
    // console.log("props:", this.props);
    //console.log("cardList:", this.props);
    const { editUser } = this.props;

    const cardList = this.props.infoUsers.map((element, index) => {
      return (
        <Card
          key={element + index}
          editEvent={this.activeEditHandler}
          infoUser={element}
          positionIndex={index}
          removeUser={this.props.removeUser}
        />
      );
    });

    return (
      <div className="list">
        {this.state.onEdit ? (
          <FormComponent
            inEdit={true}
            editUser={editUser}
            disableEvent={this.disableEditHandler}
            userInfo={this.state.userInfoOnEdit}
          />
        ) : null}
        {/* <Card infoUser={this.props.infoUsers[0]} />
        <Card infoUser={this.props.infoUsers[1]} /> */}
        {cardList}
      </div>
    );
  }
}

export default List;
