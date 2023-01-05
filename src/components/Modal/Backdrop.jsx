import React from 'react'
import styled from 'styled-components';

const Backdrop = () => {
  return (
    <KBackdrop />
  )
}

export default Backdrop

const KBackdrop = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    z-index: 100;
    background-color: rgba(0,0,0,0.5);
`;
