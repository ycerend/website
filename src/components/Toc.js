import React from "react"
  
import { InternalLink } from "./Elements"
import { MenuSection, MenuHeading, MenuList, MenuItem } from "./Menu"

export default function Toc(props) {
    return (
        <MenuSection>
            <MenuHeading>
                <InternalLink url={props.section.link_url} id={props.section.text_id} />
            </MenuHeading>
            <MenuList>
                {props.section.children.map((item, idx) => (
                    <MenuItem key={idx}>
                        <InternalLink url={item.link_url} id={item.text_id} />
                    </MenuItem>
                ))}
            </MenuList>
        </MenuSection>
    )
}
