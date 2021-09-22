import { Button } from "@mui/material";
import { withStyles } from "@mui/styles";

// const styles = {}
const styles = (theme) => ({
  edit: {
    backgroundColor: "yellow",
  },
});

const EditButton = (props) => {
  const { editEvent, userName, userLastName, status, positionIndex, classes } =
    props;
  console.log("edit props", props);
  return (
    <Button
      className={classes.edit}
      variant="outlined"
      onClick={() => editEvent(userName, userLastName, status, positionIndex)}
    >
      Edit
    </Button>
  );
};
// export default withStyles(styles)(EditButton)
export default withStyles(styles, { withTheme: true })(EditButton);
