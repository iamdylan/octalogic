import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function BookingDate(props) {
    const {to, from} = useSelector(state=>state.slotsReducer);
    const dispatch = useDispatch();

    // Handle "From" date selection and update in store
    const handleFromChange = (date) => {
        const simpleDate = getSimpleDate(date);
        dispatch({type: "SET_FROM_SLOT", payload: simpleDate});
    }

    // Handle "To" date selection and update in store
    const handleToChange = (date) => {
        const simpleDate = getSimpleDate(date);
        dispatch({type: "SET_TO_SLOT", payload: simpleDate});
    }

    // Convert long date to short date format
    const getSimpleDate = (date) => {
        return date.toLocaleDateString('en-GB', {
            day: '2-digit', month: 'short', year: 'numeric'
        }).replace(/ /g, '-')
    }

    return (
        <Fragment>
            <div className="max-w-md mx-auto my-28">
                <h1 className="text-xl text-left mb-2">Almost done, book your slot...</h1>
                <div className="flex justify-between">
                    <DatePicker dateFormat="dd/MM/yyyy" selected={Date.parse(from)} placeholderText='From' onChange={(date) => handleFromChange(date)} />
                    <DatePicker dateFormat="dd/MM/yyyy" selected={Date.parse(to)} placeholderText='To' onChange={(date) => handleToChange(date)} />
                </div>
            </div>
            <div className="max-w-md mx-auto flex justify-between">
                <Button onClick={props.prevStep}>
                    Back
                </Button>
                <Button disabled={to === "" || from === ""} variant='contained' color='primary' onClick={props.nextStep}>
                    Next
                </Button>
            </div>
        </Fragment>
    )
}