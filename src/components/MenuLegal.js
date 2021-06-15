import React from 'react'

import { InternalLink } from "./Elements"
import { MenuSection, MenuHeading, MenuList, MenuItem } from "./Menu"
import Translation from "./Translation"

export default function MenuTheme(props) {
    return (
        <MenuSection>
            <MenuHeading>
                <Translation id="nav_legal" />
            </MenuHeading>
            <MenuList>
                <MenuItem key="privacy">
                    <InternalLink url="/legal/privacy" id="nav_legal_privacy" />
                </MenuItem>
                <MenuItem key="contact">
                    <InternalLink url="/legal/contact" id="nav_legal_contact" />
                </MenuItem>
            </MenuList>
        </MenuSection>
    )
}
