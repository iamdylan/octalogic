import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getVehicles } from "../../redux/actions/vehicleActions";

export default function VehicleModel(props) {
    const {wheels} = useSelector(state=>state.wheelsReducer);
    const {selectedType} = useSelector(state=>state.vehicleTypesReducer);
    const {vehicles, selectedVehicleName, selectedVehicleId} = useSelector(state=>state.vehiclesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
         // Call action to get vehicles of selected type
        dispatch(getVehicles(wheels, selectedType));
    }, []);

    // Handle radio button selection and update id and name of vehicle selected in store
    const handleChange = (e) => {
        const { value } = e.target;
        const vals = value.split("|");
        dispatch({type: "SELECTED_VEHICLE_ID", payload: vals[0]});
        dispatch({type: "SELECTED_VEHICLE_NAME", payload: vals[1]});
    }

    const radioBtns = vehicles.map((v, index) => <FormControlLabel key={index} value={v._id + '|' + v.name} control={<Radio />} label={v.name} />);

    return (
        <Fragment>
            <div className="max-w-md mx-auto my-28">
                <h1 className="text-xl text-left mb-2">Now choose your ride...</h1>
                <RadioGroup 
                name="vehicles"
                value={selectedVehicleId + '|' + selectedVehicleName}
                onChange={handleChange}>
                    {radioBtns}
                </RadioGroup>
            </div>
            <div className="max-w-md mx-auto flex justify-between">
                <Button onClick={props.prevStep}>
                    Back
                </Button>
                <Button disabled={selectedVehicleName === "" || selectedVehicleId === ""} variant='contained' color='primary' onClick={props.nextStep}>
                    Next
                </Button>
            </div>
        </Fragment>
    )
}