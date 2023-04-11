import React, {createContext,useContext, useState} from "react";

const StateContext =createContext()

const initialState = {
    chat:false,  // for msg is opened or closed in navbar
    cart:false,
    notification:false,
    userProfile:false,

}

export const  ContextProvider = ({children})=>{
const [activeMenu,setActiveMenu]=useState (true);
const [isClicked,setIsClicked]=useState(initialState);
const [screenSize,setScreenSize]=useState(undefined)
const [currentColor,setCurrentColor]=useState('#03C9D7')
const [currentMode,setCurrentMode]=useState('Light')
const [themeSetings,setthemeSetings]=useState(false)


const setMode=(e)=>{
    setCurrentMode(e.target.value)
    localStorage.setItem('themeMode',e.target.value)
    setthemeSetings(false)
}
const setColor =(color)=>{
    setCurrentColor(color)
    localStorage.setItem('colorMode',color)
setthemeSetings(false)
}

const handleClick =(clicked)=>{
    setIsClicked ({...initialState,[clicked]:true})
}
    return ( 
    <StateContext.Provider
    value={{
        activeMenu
    ,setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,currentMode,
 
    themeSetings,setthemeSetings,
    setMode,setColor
    }}>
        {children}
    </StateContext.Provider>
)

}
export const useStateContext = ()=> useContext(StateContext);