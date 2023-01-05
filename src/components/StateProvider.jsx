import React, {createContext, useState, useEffect} from 'react'

export const StateContext = createContext();

const StateProvider = ({children}) => {

    const [workTime, setWorkTime] = useState(25 * 60)
    const [shortBreak, setShortBreak] = useState(.1 * 60)
    const [longBreak, setLongBreak] = useState(30 * 60)

    const [iniTime, setIniTime] = useState(0);

    const [activeTag, setActiveTag] = useState(0);
    const [progress, setProgress] = useState(50);
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(1000);

    useEffect(() => {
        
        switch (activeTag) {
            case 0:
                setTime(workTime);
                setIniTime(workTime);
                setIsActive(false);
                break;
            case 1:
                setTime(shortBreak);
                setIniTime(shortBreak);
                setIsActive(false);
                break;
            case 2:
                setTime(longBreak);
                setIniTime(longBreak);
                setIsActive(false);
                break;
        
            default:
                break;
        }
    }, [activeTag]);
    

    return (
        <StateContext.Provider value={{activeTag, setActiveTag, progress, setProgress, isActive, setIsActive, time, setTime, iniTime, setIniTime, workTime, setWorkTime, shortBreak, setShortBreak, longBreak, setLongBreak}}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider