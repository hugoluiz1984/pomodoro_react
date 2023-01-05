import React , {useContext}from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import { FaWindowClose } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';
import { StateContext } from '../StateProvider';

const ModalContainer = ({isOpen, onClose}) => {

    const{ workTime, setWorkTime, shortBreak, setShortBreak, longBreak, setLongBreak } = useContext(StateContext);

  return (
    <Container>
        <ModalContent initial={{y:"-100vh", scale:0}} animate={{ y:0, scale:1}} exit={{ y:"-100vh", scale:0 }}>
            <ModalHeader>
                <ModalTitle>Settings</ModalTitle>
                <ModalCloseButton onClick={onClose}>
                    <FaWindowClose fontSize="2rem"/>
                </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
                <Formik 
                    initialValues={{work:workTime/60, short:shortBreak/60,long:longBreak/60}} 
                    onSubmit={(values)=>{
                        setWorkTime(values.work * 60)
                        setShortBreak(values.short * 60)
                        setLongBreak(values.long * 60)
                    }}

                >
                    <Form>
                        <InputWrapper>
                            <FormControl>
                                <label htmlFor="work">Work</label>
                                <Field name='work' min='1' max='60'/>
                            </FormControl>
                            <FormControl>
                                <label htmlFor="short">Short Break</label>
                                <Field name='short' min='1' max='60'/>
                            </FormControl>
                            <FormControl>
                                <label htmlFor="long">Long Break</label>
                                <Field name='long' min='1' max='60'/>
                            </FormControl>
                        </InputWrapper>
                        <ButtonWrapper>
                            <ApplyButton onClick={onClose}>Apply</ApplyButton>
                        </ButtonWrapper>
                        
                    </Form>
                </Formik>
            </ModalBody>
        </ModalContent>
    </Container>
  )
}

export default ModalContainer;

const Container = styled.div`
    position: absolute;
    width: 100vh;
    height: 100vw;
    display: grid;
    place-items: center;
    z-index: 200;
`;
const ModalContent = styled(motion.div)`
    width: 30rem;
    height: 30rem;
    border-radius: 1rem;
    background-color: #fff;
    
    
`;
const ModalHeader = styled.div`
    color: ${(props) => props.theme.colors.secondaryFont};
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.colors.secondaryFont};
`;
const ModalTitle = styled.h3`
    font-size: 2rem;
`;
const ModalCloseButton = styled.div`
    all: unset;
`;
const ModalBody = styled.div`

`;
const InputWrapper = styled.div`
    display: flex;
    padding: 1rem;
    gap: 2rem;
`;
const FormControl = styled.div`
    flex:1;
    
    display: flex;
    flex-direction:column;
    color: ${(props) => props.theme.colors.secondaryFont};
    gap: 0.7rem;
    label{
        font-size: 1.5rem;
    }
    input {
        width: 100%;
        font-size: 1.5rem;
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid black;
        background: #EAD9FC;
    }
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 2rem;
`;
const ApplyButton = styled.button`
    all: unset;
    padding: 1rem 4rem;
    font-size: 1.5rem;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 0.5rem
`;