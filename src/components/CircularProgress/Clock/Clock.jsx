import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components';
import { StateContext } from '../../StateProvider';



const Clock = () => {
    const {time, setTime, isActive, setIsActive, iniTime}= useContext(StateContext);
    

    useEffect(() =>{
        if (isActive && time > 0) {
            const interval = setInterval(() => {
                setTime((time) => time -1);
            }, 1000)
            return () => clearInterval(interval);
        }
                
    },[time, isActive])

    const getTime = (time) => {
        const min = Math.floor(time / 60);
        const sec = time % 60;
        return `${min < 10 ? '0' + min: min}: ${sec < 10 ? '0' + sec : sec}`
    }

    const toggleClock = () => {
        setIsActive(!isActive);
    }

    const ResetTime = () => {
        setTime(iniTime);
        setIsActive(false);
    }

  return (
    <ClockContainer>
        <TimerText>{getTime(time)}</TimerText>
        <StartPauseButton onClick={toggleClock}>{ isActive ? 'Pause' : 'Start' }</StartPauseButton>
        {
            time === 0 &&
            <ResetButton onClick={ResetTime}>Reset</ResetButton>}
    </ClockContainer>
  )
}

export default Clock;

const ClockContainer = styled.div `
    display: grid;
    place-items: center;

`;
const TimerText = styled.h3 `
    font-size: 10rem;
`;
const StartPauseButton = styled.button `
    all: unset;
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
`;
const ResetButton = styled.button `
    all: unset;
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: red;
`;