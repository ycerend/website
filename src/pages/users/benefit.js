import React from "react"

import { Page, Card, Paragraph, List, Item } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="benefit">
            <Card id="benefit_empowerment">
                <Paragraph id="benefit_empowerment1" />
                <List>
                    <Item id="benefit_empowerment1a" />
                    <Item id="benefit_empowerment1b" />
                    <Item id="benefit_empowerment1c" />
                </List>
            </Card>
            <Card id="benefit_convenience">
                <Paragraph id="benefit_convenience1" />
                <List>
                    <Item id="benefit_convenience1a" />
                    <Item id="benefit_convenience1b" />
                    <Item id="benefit_convenience1c" />
                    <Item id="benefit_convenience1d" />
                </List>
            </Card>
            <Card id="benefit_compatibility">
                <Paragraph id="benefit_compatibility1" />
                <List>
                    <Item id="benefit_compatibility1a" />
                    <Item id="benefit_compatibility1b" />
                    <Item id="benefit_compatibility1c" />
                </List>
            </Card>
        </Page>
    )
}
