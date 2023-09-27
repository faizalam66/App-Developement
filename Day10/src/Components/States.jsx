import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const Context = createContext();
export const States = ({ children }) => {
    
    const userContext = createContext();
    var navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [hotelname, setHotelname] = useState("");

    return(
            <Context.Provider value={{
                email,
                navigate,
                setEmail,
                password,
                setPassword,
                username,
                setUsername,
                hotelname,
                setHotelname
            }}
            >{children}
            </Context.Provider>
    );
};
export const useStates = () => useContext(Context);