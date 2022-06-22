import React, { useState } from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepUsername from '../Steps/StepUsername/StepUsername';
import styles from './Register.module.css';

const steps = {
    1: StepPhoneEmail ,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername
}

const Register = () => {
    const [currStepNo, setCurrStepNo] = useState(1);
    const CurrComponent = steps[currStepNo];

    const onNext = () => {
        setCurrStepNo(currStepNo + 1);
    }
    return (
        <div>
            <CurrComponent onNext={onNext}/>
        </div>
    );
};

export default Register;