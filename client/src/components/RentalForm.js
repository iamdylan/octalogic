import React, {useState} from "react";

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import BookingDate from "./steps/BookingDate";
import Confirm from "./steps/Confirm";
import NoOfWheels from "./steps/NoOfWheels";
import UserName from "./steps/UserName";
import VehicleModel from "./steps/VehicleModel";
import VehicleType from "./steps/VehicleType";

const steps = [
    'Enter your name', 
    'Select car or bike', 
    'Choose vehicle type', 
    'Choose vehicle model', 
    'Pick the dates',
    'Confirm details'
];

export default function RentalForm(props) {
    const [activeStep, setActiveStep] = React.useState(0);

    // Proceed to next step in form
    const nextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // Go back one step in form
    const prevStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // Go to the first step
    const reset = () => {
        setActiveStep(0);
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => {
                    return (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {activeStep === steps.length ? (
                <React.Fragment>
                        All steps completed - you&apos;re finished
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {activeStep === 0 && <UserName nextStep={nextStep} />}
                    {activeStep === 1 && <NoOfWheels prevStep={prevStep} nextStep={nextStep} />}
                    {activeStep === 2 && <VehicleType prevStep={prevStep} nextStep={nextStep} />}
                    {activeStep === 3 && <VehicleModel prevStep={prevStep} nextStep={nextStep} />}
                    {activeStep === 4 && <BookingDate prevStep={prevStep} nextStep={nextStep} />}
                    {activeStep === 5 && <Confirm prevStep={prevStep} reset={reset} />}
                </React.Fragment>
            )}
        </Box>
    )

}