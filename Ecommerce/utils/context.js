import { createContext } from "react";
import AppContext from "../src/utils/context";

export const Context = createContext();

const AppContext = ({ children }) => {
    return
        <Context.Provider>
            {children}
        </Context.Provider>
}

export default AppContext;