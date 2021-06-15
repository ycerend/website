import React from "react"

import { StyledLogo } from "./Styles"
import { InternalLink } from "./Elements"

export default function Logo() {

    return (
        <InternalLink url="/">
            <StyledLogo />
        </InternalLink>
    )
}
