import React from "react"

import { StyledFloatingToc } from "./Styles"

export function FloatingToc(props) {
    return (
        <StyledFloatingToc>
            {props.children}
        </StyledFloatingToc>
    )
}
