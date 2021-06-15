import React from "react"
import { useState, useEffect, createRef } from "react"
import { BiWorld } from "react-icons/bi"
import { MdExpandMore } from "react-icons/md"
  
import { InternalLink } from "./Elements"
import { StyledNavbarContainer, StyledNavbarSection, StyledNavbarHeading, StyledNavbarDropdown } from "./Styles"
import { MenuSection, MenuHeading, MenuList, MenuItem } from "./Menu"
import MenuLanguage from "./MenuLanguage"
import MenuTheme from "./MenuTheme"
import MenuLegal from "./MenuLegal"
import Translation from "./Translation"

import { navigationHeader } from "../data/navigation"

const NavbarIcon = (props) => {
    return(
        <MdExpandMore size="24" style={{transform: props.isOpen ? "rotate(180deg)" : ""}}/>
    )
}

export const useOnClickOutside = (ref, handler, events) => {
    if (!events) events = ["mousedown", "touchstart"]
    
    const detectClickOutside = (event) =>
        ref.current && event && !ref.current.contains(event.target) && handler()
        useEffect(() => {
            for (const event of events)
                document.addEventListener(event, detectClickOutside)
            return () => {
                for (const event of events)
                    document.removeEventListener(event, detectClickOutside)
            }
        }
    )
}

const NavDropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = createRef()

    useOnClickOutside(ref, () => setIsOpen(false))

    const onKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            setIsOpen(!isOpen)
        }
    }

    return (
        <StyledNavbarSection ref={ref}>
            <StyledNavbarHeading onClick={() => setIsOpen(!isOpen)} onKeyDown={onKeyDownHandler} tabIndex="0">
                {props.toggle}
                <NavbarIcon isOpen={isOpen} />
                <StyledNavbarDropdown animate={isOpen ? "open" : "closed"} initial="closed">
                    {props.children}
                </StyledNavbarDropdown>
            </StyledNavbarHeading>
        </StyledNavbarSection>
    )
}

export default function Navbar(props) {
    return (
        <StyledNavbarContainer>
            {navigationHeader.map((sections, idx) => (
                <NavDropdown toggle={<Translation id={sections.text_id} key={idx} />}>
                    {sections.children.map((section, idx) => (
                        <MenuSection key={idx}>
                            <MenuHeading>
                                <Translation id={section.text_id} />
                            </MenuHeading>
                            <MenuList>
                                {section.children.map((item, idx) => (
                                    <MenuItem key={idx}>
                                        <InternalLink url={item.link_url} id={item.text_id} />
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </MenuSection>
                    ))}
                </NavDropdown>
            ))}
            <NavDropdown toggle={<BiWorld size={20}/>}>
                <MenuLanguage />
                <MenuTheme setTheme={props.setTheme} />
                <MenuLegal />
            </NavDropdown>
        </StyledNavbarContainer>
    )
}
