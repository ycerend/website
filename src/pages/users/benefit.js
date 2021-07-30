import React from "react"

import { Page, Card, Paragraph, List, Item } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="users_benefit">
            <Card id="users_benefit_empowerment">
                <Paragraph id="users_benefit_empowerment1" />
                <List>
                    <Item id="users_benefit_empowerment1a" />
                    <Item id="users_benefit_empowerment1b" />
                    <Item id="users_benefit_empowerment1c" />
                </List>
            </Card>
            <Card id="users_benefit_convenience">
                <Paragraph id="users_benefit_convenience1" />
                <List>
                    <Item id="users_benefit_convenience1a" />
                    <Item id="users_benefit_convenience1b" />
                    <Item id="users_benefit_convenience1c" />
                    <Item id="users_benefit_convenience1d" />
                </List>
            </Card>
            <Card id="users_benefit_compatibility">
                <Paragraph id="users_benefit_compatibility1" />
                <List>
                    <Item id="users_benefit_compatibility1a" />
                    <Item id="users_benefit_compatibility1b" />
                    <Item id="users_benefit_compatibility1c" />
                </List>
            </Card>
        </Page>
    )
}
