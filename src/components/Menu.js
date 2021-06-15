import React from "react"

import { StyledMenuSection, StyledMenuHeading, StyledMenuList, StyledMenuItem } from "./Styles"

export function MenuSection(props) {
    return (
        <StyledMenuSection>
            {props.children}
        </StyledMenuSection>
    )
}

export function MenuHeading(props) {
    return (
        <StyledMenuHeading>
            {props.children}
        </StyledMenuHeading>
    )
}

export function MenuList(props) {
    return (
        <StyledMenuList>
            {props.children}
        </StyledMenuList>
    )
}

export function MenuItem(props) {
    return (
        <StyledMenuItem>
            {props.children}
        </StyledMenuItem>
    )
}

