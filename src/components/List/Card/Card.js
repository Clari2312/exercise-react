import { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    console.log("props card: ", this.props);
    const { userName, userLastName, status } = this.props.infoUser;
    const { positionIndex } = this.props;
    return (
      <div className="card">
        <div className="card-info">
          <p>{userName}</p>
          <p>{userLastName}</p>
          <div className={status ? "card-info_on" : "card-info_off"}></div>
        </div>
        <div className="card-actions">
          <button>Edit</button>
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
