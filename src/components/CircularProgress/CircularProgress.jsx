import { startOptimizedAppearAnimation } from 'framer-motion';
import React, {useContext, useEffect} from 'react'
import styled from 'styled-components';
import { StateContext } from '../StateProvider';
import Clock from './Clock/Clock';

const CircularProgress = () => {
    const {progress, setProgress, time, iniTime} = useContext(StateContext);

    useEffect(() => {
      (setProgress(time / (iniTime / 100)));
    }, [progress, time]);

  return (
    <OuterCircular progress={progress}>
        <InnerCircular  ><Clock /></InnerCircular>
    </OuterCircular>
  )
}

export default CircularProgress

const OuterCircular = styled.div `
    width: 35rem;
    height: 35rem;
    
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: conic-gradient( ${(props) => props.theme.colors.primary} ${({progress}) => progress}%, transparent ${({progress}) => progress}%);
`;
const InnerCircular = styled.div `
    width: 33rem;
    height: 33rem;
    background:  ${(props) => props.theme.colors.secondary};
    
    border-radius: 50%;
    display: grid;
    place-items: center;
`;