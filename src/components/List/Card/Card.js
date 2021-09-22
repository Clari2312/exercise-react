import { Component } from "react";
import "./Card.css";
import { Typography, Avatar, Stack, Button, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  pippo: {
    width: "25px !important",
    height: "25px !important",
  },
  itemButton: {
    width: "30%",
    justifyContent: "space-around",
    padding: "10px",
  },
  itemInfo: {
    justifyContent: "space-around",
    width: "70%",
    padding: "10px",
  },
});

// class Card extends Component {
//   render() {
//     // console.log("props card: ", this.props);
//     const { userName, userLastName, status } = this.props.infoUser;
//     const { positionIndex, editEvent, removeUser } = this.props;
//     return (
//       <div className="card">
//         <div className="card-info">
//           <p>{userName}</p>
//           <p>{userLastName}</p>
//           <div className={status ? "card-info_on" : "card-info_off"}></div>
//         </div>
//         <div className="card-actions">
//           <button
//             onClick={() =>
//               editEvent(userName, userLastName, status, positionIndex)
//             }
//           >
//             Edit
//           </button>
//           <button
//             onClick={() => {
//               removeUser(positionIndex);
//             }}
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Card;

// function Card(props) { }
const Card = (props) => {
  // class Card extends Component {
  // render() {
  // console.log("props card: ", this.props);
  const { userName, userLastName, status } = props.infoUser;
  const { positionIndex, editEvent, removeUser } = props;
  const classes = useStyles();
  return (
    <Paper elevation={3} sx={{ margin: "10px" }}>
      <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
        <Stack direction="row" spacing={1} className={classes.itemInfo}>
          <Typography variant="body1">{userName}</Typography>
          <Typography variant="body1">{userLastName}</Typography>
          {/* <div className={status ? "card-info_on" : "card-info_off"}></div> */}
          <Avatar
            sx={{ bgcolor: status ? "#0ee836" : "#e80e0e" }}
            className={classes.pippo}
          >
            {""}
          </Avatar>
        </Stack>
        <Stack direction="column" spacing={1} className={classes.itemButton}>
          <Button
            variant="outlined"
            onClick={() =>
              editEvent(userName, userLastName, status, positionIndex)
            }
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              removeUser(positionIndex);
            }}
          >
            Remove
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
  // }
};

export default Card;
