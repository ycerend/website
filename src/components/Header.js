import React from "react"
import Media from "react-media"

import { Navbar, NavDropdown} from "./Navbar"
import Logo from "./Logo"
import MenuLanguage from "./MenuLanguage"
import MenuTheme from "./MenuTheme"
import { StyledHeader, StyledHeaderContainer } from "./Styles"
import { BiWorld, BiSun } from "react-icons/bi"

export default function Header(props) {
    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <div>
                    <Logo />
                    <Media query="(max-width: 1199px)" render={() => (
                        <div  style={{display: "flex", flexDirection: "row"}}>
                            <NavDropdown toggle={<BiWorld size={20}/>} style={{paddingRight: "0.25em"}}>
                                <MenuLanguage />
                            </NavDropdown>
                            <NavDropdown toggle={<BiSun size={20}/>} style={{paddingRight: "0"}}>
                                <MenuTheme setTheme={props.setTheme} />
                            </NavDropdown>
                        </div>
                    )}/>
                </div>
                <Navbar setTheme={props.setTheme} />
            </StyledHeaderContainer>
        </StyledHeader>
    )
}
