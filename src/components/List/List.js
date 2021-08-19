import { Component } from "react";
import "./List.css";
import Card from "./Card/Card";

class List extends Component {
  render() {
    // console.log("props:", this.props);
    console.log("cardList:", this.props.infoUsers);
    const cardList = this.props.infoUsers.map((element, index) => {
      return <Card key={element + index} infoUser={element} />;
    });
    return (
      <div className="list">
        {/* <Card infoUser={this.props.infoUsers[0]} />
        <Card infoUser={this.props.infoUsers[1]} /> */}
        {cardList}
      </div>
    );
  }
}

export default List;
