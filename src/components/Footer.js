import React from "react"

import { InternalLink } from "./Elements"
import { MenuSection, MenuHeading, MenuList, MenuItem } from "./Menu"
import { StyledFooterContainer, StyledFooterGrid, StyledFooterColumn } from "./Styles"
import MenuLanguage from "./MenuLanguage"
import MenuTheme from "./MenuTheme"
import MenuLegal from "./MenuLegal"
import Translation from "./Translation"

import { navigationFooter } from "/src/data/navigation"

export default function Footer(props) {
    return (
        <div>
            <StyledFooterContainer>
                <StyledFooterGrid>
                    {navigationFooter.map((section, idx) => (
                        <StyledFooterColumn key={idx}>
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
                        </StyledFooterColumn>
                    ))}
                </StyledFooterGrid>
            </StyledFooterContainer>
            <StyledFooterContainer>
                <StyledFooterGrid>
                    <StyledFooterColumn>
                        <MenuLanguage />
                    </StyledFooterColumn>
                    <StyledFooterColumn>
                        <MenuTheme setTheme={props.setTheme} />
                    </StyledFooterColumn>
                    <StyledFooterColumn>
                        <MenuLegal />
                    </StyledFooterColumn>
                    <StyledFooterColumn>
                        <p>
                            <img alt="badge indicating license" src="https://img.shields.io/github/license/fdrtd/website" />
                            <img alt="badge indicating last commit" src="https://img.shields.io/github/last-commit/fdrtd/website" /> &nbsp;&nbsp;&nbsp;&nbsp;
                        </p>
                    </StyledFooterColumn>
                </StyledFooterGrid>
            </StyledFooterContainer>
        </div>
    )
}
