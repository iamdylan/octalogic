import React, { Fragment } from "react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from "react-redux";
import { bookVehicle } from "../../redux/actions/bookingActions";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Confirm(props) {
    const { firstName, lastName } = useSelector(state=>state.usernameReducer);
    const { selectedVehicleName, selectedVehicleId } = useSelector(state=>state.vehiclesReducer);
    const {to, from} = useSelector(state=>state.slotsReducer);
    const { bookingSuccessMsg, bookingFailureMsg } = useSelector(state=>state.alertsReducer);
    const dispatch = useDispatch();

    // Prep payload and call action to add into DB
    const submit = () => {
        const reqData = {
            username: firstName + ' ' + lastName,
            vehicle: selectedVehicleId,
            bookedSlots: {
                from,
                to
            }
        }

        // Action to add data into DB
        dispatch(bookVehicle(reqData));
    }

    // To reset identifier when "Success" alert closes
    const handleBookingSuccessClose = (event) => {
        dispatch({type: "BOOKING_SUCCESS", payload: false});
    };

    // To reset identifier when "Error" alert closes
    const handleBookingFailureClose = (event) => {
        dispatch({type: "BOOKING_FAILURE", payload: false});
    };

    // To reset all fields/states in store and return to first step
    const reset = () => {
        dispatch({type: "SET_FIRST_NAME", payload: ""});
        dispatch({type: "SET_LAST_NAME", payload: ""});
        dispatch({type: "SELECTED_WHEELS", payload: '2'});
        dispatch({type: "GET_VEHICLE_TYPES", payload: []});
        dispatch({type: "SELECTED_VEHICLE_TYPE", payload: ""});
        dispatch({type: "GET_VEHICLES", payload: []});
        dispatch({type: "SELECTED_VEHICLE_NAME", payload: ""});
        dispatch({type: "SELECTED_VEHICLE_ID", payload: ""});
        dispatch({type: "SET_FROM_SLOT", payload: ""});
        dispatch({type: "SET_TO_SLOT", payload: ""});
        props.reset();
    }

    return (
        <Fragment>
            <div className="max-w-md mx-auto my-28">
                <h1 className="text-xl text-left mb-8">Confirm the information below and click Submit.</h1>
                <div className="info-wrapper flex flex-wrap justify-between">
                    <div className="text-left w-2/5 mb-8">
                        <h2 className="text-lg font-medium underline">Full Name</h2>
                        <span>{firstName} {lastName}</span>
                    </div>
                    <div className="text-left w-2/5 mb-8">
                        <h2 className="text-lg font-medium underline">Vehicle Model</h2>
                        <span>{selectedVehicleName}</span>
                    </div>
                    <div className="text-left w-2/5 mb-8">
                        <h2 className="text-lg font-medium underline">Booked From</h2>
                        <span>
                            {from}
                        </span>
                    </div>
                    <div className="text-left w-2/5 mb-8">
                        <h2 className="text-lg font-medium underline">Booked To</h2>
                        <span>
                            {to}
                        </span>
                    </div>
                </div>
            </div>
            <div className="max-w-md mx-auto flex justify-between">
                <Button onClick={props.prevStep}>
                    Back
                </Button>
                <Button variant='contained' color='primary' onClick={reset}>
                    Reset
                </Button>
                <Button variant='contained' color='primary' onClick={submit}>
                    Submit
                </Button>
            </div>
            <Snackbar open={bookingSuccessMsg} autoHideDuration={4000} onClose={handleBookingSuccessClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    Booking Successful!
                </Alert>
            </Snackbar>
            <Snackbar open={bookingFailureMsg} autoHideDuration={4000} onClose={handleBookingFailureClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    Something went wrong, please try again!
                </Alert>
            </Snackbar>
        </Fragment>
    )
}