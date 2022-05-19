import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getVehicleTypes } from "../../redux/actions/vehicleTypesActions";

export default function VehicleType(props) {
    const {wheels} = useSelector(state=>state.wheelsReducer);
    const {vehicleTypes, selectedType} = useSelector(state=>state.vehicleTypesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        // Call action to get vehicle types
        dispatch(getVehicleTypes(wheels));
    }, []);

    // Handle radio button selection and update in store
    const handleChange = (e) => {
        dispatch({type: "SELECTED_VEHICLE_TYPE", payload: e.target.value})
    }

    const radioBtns = vehicleTypes.map((type, index) => <FormControlLabel key={index} value={type.name} control={<Radio />} label={type.name.charAt(0).toUpperCase() + type.name.slice(1)} />);

    return (
        <Fragment>
            <div className="max-w-md mx-auto my-28">
                <h1 className="text-xl text-left mb-2">What kind of vehicle would you like?</h1>
                <RadioGroup 
                name="vehicleTypes"
                value={selectedType}
                onChange={handleChange}>
                {radioBtns}
                </RadioGroup>
            </div>
            <div className="max-w-md mx-auto flex justify-between">
                <Button onClick={props.prevStep}>
                    Back
                </Button>
                <Button disabled={selectedType === ""} variant='contained' color='primary' onClick={props.nextStep}>
                    Next
                </Button>
            </div>
        </Fragment>
    )
}