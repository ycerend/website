import React from "react"

import { StyledMenuSection, StyledMenuHeading, StyledMenuList, StyledMenuItem } from "./Styles"

export function MenuSection(props) {
    return (
        <StyledMenuSection style={props.style}>
            {props.children}
        </StyledMenuSection>
    )
}

export function MenuHeading(props) {
    return (
        <StyledMenuHeading style={props.style}>
            {props.children}
        </StyledMenuHeading>
    )
}

export function MenuList(props) {
    return (
        <StyledMenuList style={props.style}>
            {props.children}
        </StyledMenuList>
    )
}

export function MenuItem(props) {
    return (
        <StyledMenuItem style={props.style}>
            {props.children}
        </StyledMenuItem>
    )
}

