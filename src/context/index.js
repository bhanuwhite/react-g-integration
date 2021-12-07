import React,  {useState} from 'react'


export const ContextProvider = React.createContext()
const ContextComponent = ({children}) => {

    const initialState ={
        files: [],
        name:"",
        email:""
    }


    const [state, setState] = useState(initialState)

    return (
        <ContextProvider.Provider value={{state, setState}}>
           {children}
        </ContextProvider.Provider>
    )
}

export {ContextComponent}

