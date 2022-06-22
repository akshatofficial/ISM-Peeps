import React from 'react';
import styles from './StepOtp.jsx';
const StepOtp = ({ onNext }) => {
    return (
        <>
            <div>This is otp component</div>
                <button onClick={onNext}>Next</button>
        </>
    );
};

export default StepOtp;