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
    const [sideNavOpen, setSideNavOpenAction] = useState(false)
    const [accountModalOpen, setAccountModalOpenAction] = useState(false)
    const [searchOpen, setSearchOpenAction] = useState(false)

    return(
        <StateContext.Provider
        value={{
            user,
            createUserAction,
            defaultUserImg,
            sideNavOpen,
            setSideNavOpenAction,
            accountModalOpen,
            setAccountModalOpenAction,
            searchOpen,
            setSearchOpenAction
        }}>
            {children}
        </StateContext.Provider>
    )
}