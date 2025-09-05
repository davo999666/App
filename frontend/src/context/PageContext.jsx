import { createContext, useState } from "react";

// Create the context
export const PageContext = createContext();

// Create the provider component
export const PageProvider = ({ children }) => {
    const [page, setPage] = useState("home");

    return (
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    );
};
