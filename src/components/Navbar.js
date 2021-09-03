import React from "react"
import Media from "react-media"
import { useState, useEffect, createRef } from "react"
import { BiWorld, BiSun } from "react-icons/bi"
/*import { MdExpandMore } from "react-icons/md"*/
  
import { InternalLink, ExternalLink } from "./Elements"
import { StyledNavbarContainer, StyledNavbarGrid, StyledNavbarSection, StyledNavbarHeading, StyledNavbarDropdown } from "./Styles"
import { MenuSection, MenuHeading, MenuList, MenuItem } from "./Menu"
import MenuLanguage from "./MenuLanguage"
import MenuTheme from "./MenuTheme"
import Translation from "./Translation"

import { sectionUsers, sectionContributors, sectionSolution, sectionSupporters, sectionTechnology, sectionProject } from "/src/data/navigation"

/*const NavbarIcon = (props) => {
    return(
        <MdExpandMore size="24" style={{position: 'relative', left: '-0.4em', transform: props.isOpen ? "rotate(180deg)" : ""}}/>
    )
}*/

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

export const NavDropdown = (props) => {
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
            <StyledNavbarHeading onClick={() => setIsOpen(!isOpen)} onKeyDown={onKeyDownHandler} tabIndex="0" style={props.style}>
                {props.toggle}
                {/*<div>{props.toggle}</div>
                <NavbarIcon isOpen={isOpen} />*/}
                <StyledNavbarDropdown animate={isOpen ? "open" : "closed"} initial="closed">
                    {props.children}
                </StyledNavbarDropdown>
            </StyledNavbarHeading>
        </StyledNavbarSection>
    )
}

/*const NavDropDownMultiple = (props) => {
    return (
        <NavDropdown toggle={<Translation id={props.sections.text_id} key={props.sections.idx} />}>
            {props.sections.children.map((section, idx) => (
                <MenuSection key={idx}>
                    <MenuHeading>
                        <Translation id={section.text_id} />
                        {/ * <InternalLink url={section.link_url} id={section.text_id} /> * /}
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
    )
}*/

const NavDropDownSingle = (props) => {
    return (
        <NavDropdown toggle={<Translation id={props.section.text_id} key={props.section.idx} />}>
            <MenuSection key={props.section.idx}>
                <MenuList>
                    {props.section.children.map((item, idx) => (
                        <MenuItem key={idx}>
                            <InternalLink url={item.link_url} id={item.text_id} />
                        </MenuItem>
                    ))}
                </MenuList>
            </MenuSection>
        </NavDropdown>
    )
}

export function Navbar(props) {
    return (
        <StyledNavbarContainer>
            <StyledNavbarGrid>
                <NavDropDownSingle section={sectionUsers} />
                <NavDropDownSingle section={sectionSupporters} />
                <NavDropDownSingle section={sectionContributors} />
                <NavDropDownSingle section={sectionTechnology} />
                <NavDropDownSingle section={sectionSolution} />
                <NavDropDownSingle section={sectionProject} />
                <MenuHeading style={{marginRight: "2.5em"}}>
                    <ExternalLink url="https://fdrtd.github.io/fdrtd" target="_new" id="nav_docs" />
                </MenuHeading>
                <MenuHeading style={{marginRight: "2.5em"}}>
                    <ExternalLink url="https://github.com/fdrtd" target="_new" id="nav_github" />
                </MenuHeading>
                <Media query="(min-width: 1200px)" render={() => (
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <NavDropdown toggle={<BiWorld size={20}/>} style={{paddingRight: "0.25em"}}>
                            <MenuLanguage />
                        </NavDropdown>
                        <NavDropdown toggle={<BiSun size={20}/>} style={{paddingRight: "0"}}>
                            <MenuTheme setTheme={props.setTheme} />
                        </NavDropdown>
                    </div>
                )}/>
            </StyledNavbarGrid>
        </StyledNavbarContainer>
    )
}
