import { createContext, useState } from "react"

export const FormContext = createContext();



export const FormContextWrapper = ({children})=>{
    const [edit, setEdit] = useState(false);
    return(
        <FormContext.Provider value={{edit, setEdit}}>
            {children}
        </FormContext.Provider>
    )
};