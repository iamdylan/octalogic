import React, { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function NoOfWheels(props) {
    const { wheels } = useSelector(state => state.wheelsReducer);
    const dispatch = useDispatch();

    // Handle radio button selection and update in store
    const handleChange = (e) => {
        dispatch({type: "SELECTED_WHEELS", payload: e.target.value});
    }

    return (
        <Fragment>
            <div className="no-of-wheels max-w-md mx-auto my-28">
                <h1 className="text-xl text-left mb-2">How many wheels would you like on your vehicle?</h1>
                <RadioGroup 
                name="noOfWheels"
                value={wheels}
                onChange={handleChange}>
                    <FormControlLabel value={2} control={<Radio />} label="Two wheeler" />
                    <FormControlLabel value={4} control={<Radio />} label="Four wheeler" />
                </RadioGroup>
            </div>
            <div className="max-w-md mx-auto flex justify-between">
                <Button onClick={props.prevStep}>
                    Back
                </Button>
                <Button disabled={wheels === ""} variant='contained' color='primary' onClick={props.nextStep}>
                    Next
                </Button>
            </div>
        </Fragment>
    )
}