import { Component, useState, useEffect, useRef, memo } from "react";
import "./Form.css";

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
    <div className="form" style={{ width: inEdit ? "100%" : "50%" }}>
      <form>
        <div className="form-input">
          <label>Name:</label>
          <input
            id="form-input_name"
            ref={firstNameRef}
            type="text"
            // onChange={(e) => inputFirstNameHandler(e)}
            defaultValue={inEdit ? userInfo.userName : ""}
          ></input>
        </div>
        <div className="form-input">
          <label>LastName:</label>
          <input
            id="form-input_lastname"
            ref={lastNameRef}
            type="text"
            // onChange={(e) => inputLastNameHandler(e)}
            defaultValue={inEdit ? userInfo.userLastName : ""}
          ></input>
        </div>
        <div className="form-actions">
          <button
            className="form-actions_off"
            onClick={(e) => {
              e.preventDefault();
              console.log("firstNameRef al click", firstNameRef.current.value);
              if (inEdit) {
                // editUser(formState, false, userInfo.index);
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
                // setFormState({
                //   firstName: "",
                //   lastName: "",
                // });

                // resetInputValueHandler();
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
          </button>
          <button
            className="form-actions_on"
            onClick={(e) => {
              e.preventDefault();
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
                // setFormState({
                //   firstName: "",
                //   lastName: "",
                // });

                // resetInputValueHandler();
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
          </button>
          {inEdit ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                disableEvent();
              }}
            >
              Cancel
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
};
// }

export default Form;
