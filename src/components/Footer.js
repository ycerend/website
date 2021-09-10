import React from "react"

import { InternalLink } from "./Elements"
import { MenuSection, MenuHeading, MenuList, MenuItem } from "./Menu"
import { StyledFooterContainer, StyledFooterItem } from "./Styles"
import MenuLanguage from "./MenuLanguage"
import MenuTheme from "./MenuTheme"
import MenuLegal from "./MenuLegal"
import Translation from "./Translation"

import { navigationFooter } from "/src/data/navigation"

export default function Footer(props) {
    return (
        <div>
            <StyledFooterContainer>
                {navigationFooter.map((section, idx) => (
                    <StyledFooterItem key={idx}>
                        <MenuSection>
                            <MenuHeading>
                                <Translation id={section.text_id} />
                                {/* <InternalLink url={section.link_url} id={section.text_id} /> */}
                            </MenuHeading>
                            <MenuList>
                                {section.children.map((child, cidx) => (
                                    <MenuItem key={cidx}>
                                        <InternalLink url={child.link_url} id={child.text_id} />
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </MenuSection>
                    </StyledFooterItem>
                ))}
            </StyledFooterContainer>
            <StyledFooterContainer>
                <StyledFooterItem>
                    <MenuLanguage />
                </StyledFooterItem>
                <StyledFooterItem>
                    <MenuTheme setTheme={props.setTheme} />
                </StyledFooterItem>
                <StyledFooterItem>
                    <MenuLegal />
                </StyledFooterItem>
                <StyledFooterItem>
                    <p>
                        <img alt="badge indicating license" src="https://img.shields.io/github/license/fdrtd/website" />
                    </p>
                    <p>
                        <img alt="badge indicating last commit" src="https://img.shields.io/github/last-commit/fdrtd/website" /> &nbsp;&nbsp;&nbsp;&nbsp;
                    </p>
                </StyledFooterItem>
            </StyledFooterContainer>
        </div>
    )
}
