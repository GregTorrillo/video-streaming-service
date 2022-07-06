import React, {useContext, useState} from 'react';

export const StateContext = React.createContext();

export function useStateContext(){
    return useContext(StateContext)
}

export function Provider({children}){
    const [user, setUser] = useState('')
    const defaultUserImg = 'https://randomuser.me/api/portraits/women/44.jpg'
    const createUserAction = (e) => {
        setUser(e.target.value)
        console.log(user)
    }
    return(
        <StateContext.Provider
        value={{
            user,
            createUserAction,
            defaultUserImg
        }}>
            {children}
        </StateContext.Provider>
    )
}