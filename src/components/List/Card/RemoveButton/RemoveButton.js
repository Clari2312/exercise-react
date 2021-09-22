import { Button } from "@mui/material";
import { styled, withTheme } from "@mui/styles";

const NewButton = styled(withTheme(Button))((props) => {
  console.log("props ", props);
  return {
    backgroundColor: "red",
  };
});

const StyledButton = (props) => {
  const { removeUser, positionIndex } = props;
  return (
    <NewButton
      variant="outlined"
      onClick={() => {
        removeUser(positionIndex);
      }}
    >
      Remove
    </NewButton>
  );
};

export default StyledButton;
