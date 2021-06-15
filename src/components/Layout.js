import React from "react"
import { useState } from "react"
import { ThemeProvider } from "styled-components"
import { useIntl, IntlProvider } from "gatsby-plugin-intl"

import { StyledPage, StyledContent, DarkTheme, LightTheme, HighContrastTheme } from "./Styles"
import Header from "./Header"
import Footer from "./Footer"

require("../css/global.css")


const themes = {
    "dark": DarkTheme,
    "light": LightTheme,
    "highcontrast": HighContrastTheme
}

export default function Layout({ children }) {
    const [themeFlag, setTheme] = useState("dark")
    const intl = useIntl()
    return (
        <ThemeProvider theme = {themes[themeFlag]}>
            <IntlProvider locale={intl.locale} defaultLocale={intl.defaultLocale} messages={intl.messages}>
                <StyledPage>
                    <Header setTheme={setTheme} />
                    <StyledContent>
                        { children }
                    </StyledContent>
                    <Footer setTheme={setTheme} />
                </StyledPage>
            </IntlProvider> 
        </ThemeProvider>
    )
}
