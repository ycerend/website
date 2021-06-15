import React from "react"

import Navbar from "./Navbar"
import Logo from "./Logo"
import { StyledHeader, StyledHeaderContainer } from "./Styles"

export default function Header(props) {
    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <Logo />
                <Navbar setTheme={props.setTheme} />
            </StyledHeaderContainer>
        </StyledHeader>
    )
}
