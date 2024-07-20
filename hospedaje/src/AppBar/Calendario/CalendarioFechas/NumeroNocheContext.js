import React, { createContext, useState, useContext } from 'react';

const NumeroNocheContext = createContext();

export const useNumeroNoche = () => {
    return useContext(NumeroNocheContext);
};

export const NumeroNocheProvider = ({ children }) => {
    const [numeroNoche, setNumeroNoche] = useState(0);

    return (
        <NumeroNocheContext.Provider value={{ numeroNoche, setNumeroNoche }}>
            {children}
        </NumeroNocheContext.Provider>
    );
};
