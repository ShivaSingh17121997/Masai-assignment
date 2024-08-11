import React, { createContext, useState } from 'react'

 export const themeContext = createContext();
export default function ThemeContext({ children }) {
    const [theme, setTheme] = useState(false)

    const handleTheme = () => {
        setTheme(!theme)
    }

    return (
        <div>
            <themeContext.Provider value={{ theme, handleTheme }}>
                {children}
            </themeContext.Provider>
        </div>
    )
}
