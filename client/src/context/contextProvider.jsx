import React, { createContext,useContext,useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [activeMenu,setActiveMenu] = useState(true);
    const [isClicked,setisClicked] = useState(initialState);
    const [screenSize,setScreenSize] = useState(undefined);
    
    
}