import { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    console.log("props: ", this.props);
    const { userName, userLastName, status } = this.props.infoUser;
    return (
      <div className="card">
        <div className="card-info">
          <p>{userName}</p>
          <p>{userLastName}</p>
          <div className={status ? "card-info_on" : "card-info_off"}></div>
        </div>
        <div className="card-actions">
          <button>Edit</button>
          <button>Remove</button>
        </div>
      </div>
    );
  }
}

export default Card;
