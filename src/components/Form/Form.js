import { Component, useState, useEffect, useRef, memo } from "react";
import "./Form.css";
import { TextField, Button, Stack, Box } from "@mui/material";
import { minHeight } from "@mui/system";

// class Form extends Component
const Form = (props) => {
  // state = {
  //   form: {
  //     firstName: "",
  //     lastName: "",
  //   },
  // };
  // const count = useRef(0)

  // const [formState, setFormState] = useState({
  //   firstName: "",
  //   lastName: "",
  // });

  const firstNameRef = useRef();
  const lastNameRef = useRef();

  // componentDidMount() {
  //   console.log("pippo ", this.props);
  //   if (this.props.inEdit) {
  //     this.setState({
  //       form: {
  //         firstName: this.props.userInfo.userName,
  //         lastName: this.props.userInfo.userLastName,
  //       },
  //     });
  //   }
  // }

  // const inEdit = props.inEdit
  // const userInfo = props.userInfo
  //destructuring
  //1. devo usare let o const?
  //2. che tipo di variabile è quello che sto destrutturando? (in questo caso props è un oggetto quindi uso {})
  //3. assegno mettendo = e la variabile che sto destrutturando
  //4. all'interno delle {} scrivo le proprietà che voglio prendere dalla variabile che sto destrutturando

  // const { inEdit, userInfo } = props;
  // let {userInfo} = props
  // const {inEdit} = props

  const { disableEvent, inEdit, userInfo, editUser } = props;

  // useEffect(() => {
  //   console.log("firstNameRef al did mount", firstNameRef);
  //   if (inEdit) {
  //     // setFormState({
  //     //   firstName: userInfo.userName,
  //     //   lastName: userInfo.userLastName,
  //     // });
  //   }
  // }, [inEdit, userInfo]);

  console.log("firstNameRef ", firstNameRef);

  //non si può mettere le props (quindi le proprietà di un oggetto) come dipendenza nell'array

  // const resetInputValueHandler = () => {
  //   const inputName = document.getElementById("form-input_name");
  //   const inputLastName = document.getElementById("form-input_lastname");
  //   inputName.value = "";
  //   inputLastName.value = "";
  // };

  // inputFirstNameHandler = (event) => {
  // const inputFirstNameHandler = (event) => {
  //   // console.log("event: ", event.target.value);
  //   setFormState((prevState, prevProps) => {
  //     return {
  //       firstName: event.target.value,
  //       lastName: prevState.lastName,
  //     };
  //   });
  // };

  // inputLastNameHandler (event) {
  // const inputLastNameHandler = (event) => {
  //   // console.log("event: ", event.target.value);
  //   setFormState((prevState, prevProps) => {
  //     return {
  //       firstName: prevState.firstName,
  //       lastName: event.target.value,
  //     };
  //   });
  // };

  // render() {
  console.log("form props: ", props);
  // const { disableEvent, inEdit, userInfo, editUser } = props;

  return (
    <Box sx={{ width: inEdit ? "100%" : "50%", padding: "20px" }}>
      <Box component="form">
        <Stack direction="column" sx={{ minHeight: "200px" }} spacing={3}>
          <TextField
            label="Name"
            variant="standard"
            inputRef={firstNameRef}
            defaultValue={inEdit ? userInfo.userName : ""}
          />
          <TextField
            label="Lastname"
            variant="standard"
            inputRef={lastNameRef}
            defaultValue={inEdit ? userInfo.userLastName : ""}
          />
          <Stack direction="row" spacing={5}>
            <Button
              variant="contained"
              color="error"
              onClick={(e) => {
                if (inEdit) {
                  editUser(
                    {
                      firstName: firstNameRef.current.value,
                      lastName: lastNameRef.current.value,
                    },
                    false,
                    userInfo.index
                  );
                  disableEvent();
                } else {
                  props.addUser(
                    {
                      firstName: firstNameRef.current.value,
                      lastName: lastNameRef.current.value,
                    },
                    false
                  );
                  firstNameRef.current.value = "";
                  lastNameRef.current.value = "";
                }
              }}
            >
              Offline
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={(e) => {
                if (inEdit) {
                  editUser(
                    {
                      firstName: firstNameRef.current.value,
                      lastName: lastNameRef.current.value,
                    },
                    true,
                    userInfo.index
                  );
                  disableEvent();
                } else {
                  props.addUser(
                    {
                      firstName: firstNameRef.current.value,
                      lastName: lastNameRef.current.value,
                    },
                    true
                  );
                  firstNameRef.current.value = "";
                  lastNameRef.current.value = "";
                }
              }}
            >
              Online
            </Button>
            {inEdit ? (
              <Button
                variant="contained"
                color="info"
                onClick={(e) => {
                  disableEvent();
                }}
              >
                Cancel
              </Button>
            ) : null}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Form;
