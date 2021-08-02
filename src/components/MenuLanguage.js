import React from 'react'
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

import { MenuSection, MenuHeading, MenuList, MenuItem } from "./Menu"
import Translation from "./Translation"
import { StyledToggleLanguage } from "./Styles"

const languageName = {
    en: "English",
    de: "Deutsch",
    hi: "हिंदी",
}
  
export default function MenuTheme(props) {
    return (
        <MenuSection>
            <MenuHeading>
                <Translation id="nav_language_select" />
            </MenuHeading>
            <MenuList>
                <IntlContextConsumer>
                    {({ languages, language: currentLocale }) =>
                    languages.map(language => (
                        <MenuItem>
                            <StyledToggleLanguage currentLocale={currentLocale} language={language} key={language} onClick={() => changeLocale(language)}>
                                {languageName[language]}
                            </StyledToggleLanguage>
                        </MenuItem>
                    ))}
                </IntlContextConsumer>
            </MenuList>
        </MenuSection>
    )
}
