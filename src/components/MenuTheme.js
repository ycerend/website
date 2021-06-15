import React from 'react'

import { MenuSection, MenuHeading, MenuList, MenuItem } from "./Menu"
import { StyledToggleDark, StyledToggleLight, StyledToggleHighContrast } from "./Styles"
import Translation from "./Translation"

export default function MenuTheme(props) {
    return (
        <MenuSection>
            <MenuHeading>
                <Translation id="nav_theme_select" />
            </MenuHeading>
            <MenuList>
                <MenuItem>
                    <StyledToggleDark onClick={ () => props.setTheme("dark")} key="dark">
                        <Translation id="nav_theme_dark" />
                    </StyledToggleDark>
                </MenuItem>
                <MenuItem>
                    <StyledToggleLight onClick={ () => props.setTheme("light") } key="light">
                        <Translation id="nav_theme_light" />
                    </StyledToggleLight>
                </MenuItem>
                <MenuItem>
                    <StyledToggleHighContrast onClick={ () => props.setTheme("highcontrast") } key="highcontrast">
                        <Translation id="nav_theme_highcontrast" />
                    </StyledToggleHighContrast>
                </MenuItem>
            </MenuList>
        </MenuSection>
    )
}
