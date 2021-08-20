import { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    console.log("props card: ", this.props);
    const { userName, userLastName, status } = this.props.infoUser;
    const { positionIndex, editEvent } = this.props;
    return (
      <div className="card">
        <div className="card-info">
          <p>{userName}</p>
          <p>{userLastName}</p>
          <div className={status ? "card-info_on" : "card-info_off"}></div>
        </div>
        <div className="card-actions">
          <button
            onClick={() =>
              editEvent(userName, userLastName, status, positionIndex)
            }
          >
            Edit
          </button>
          <button
            onClick={() => {
              this.props.removeUser(positionIndex);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
