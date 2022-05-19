import React, { Fragment } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";

export default function UserName(props) {
    const {firstName, lastName} = useSelector(state=>state.usernameReducer);
    const dispatch = useDispatch();

    // Handle input on fields
    const handleChange = (e) => {
        let {name, value} = e.target;

        // Update first name/last name in store
        name === 'firstName' ? 
            dispatch({type: "SET_FIRST_NAME", payload: value}) : 
            dispatch({type: "SET_LAST_NAME", payload: value});
    }

    return (
        <Fragment>
            <div className="max-w-md mx-auto my-28">
                <h1 className="text-xl text-left mb-2">First, what's your name?</h1>
                <TextField 
                margin="normal"
                fullWidth
                id="first-name" 
                name="firstName" 
                label="First Name" 
                variant="outlined" 
                value={firstName}
                onChange={handleChange}
                />
                <TextField
                margin="normal"
                fullWidth 
                id="last-name" 
                name="lastName" 
                label="Last Name" 
                variant="outlined" 
                value={lastName}
                onChange={handleChange}
                />
            </div>
            <div className="max-w-md mx-auto flex justify-center">
                <Button disabled={firstName === "" || lastName === ""} variant='contained' color='primary' onClick={props.nextStep}>
                    Next
                </Button>
            </div>
        </Fragment>
    )
}