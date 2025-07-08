import React, { createContext, useState } from 'react';

export const dataContext = createContext();

function UserContext({ children }) {
    const [startRes, setStartRes] = useState(false);
    const [userMessage, setUserMessage] = useState(''); // ⬅️ new state

    const value = {
        startRes,
        setStartRes,
        userMessage,
        setUserMessage
    };

    return (
        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>
    );
}

export default UserContext;
