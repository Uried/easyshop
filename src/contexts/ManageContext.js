import React, { createContext, useState } from 'react'

//create context
export const ManageContext = createContext();

const ManageProvider = ({children}) => {
    //Manage state
const [manageIsOpen, setManageIsOpen] = useState(false);

const handleCloseManage = () => {
    setManageIsOpen(false)
}
return <ManageContext.Provider value={{manageIsOpen, setManageIsOpen, handleCloseManage}}>
    {children}
</ManageContext.Provider>

};

export default ManageProvider;


