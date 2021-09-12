import React from "react"

import { Page, Cards, Card, Paragraph, List, Item } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="welcome">
            <Cards>
                <Card id="welcome_nutshell">
                    <Paragraph id="welcome_nutshell_1" />
                    <Paragraph id="welcome_nutshell_2" />
                    <Paragraph id="welcome_nutshell_3" />
                    <Paragraph id="welcome_nutshell_4" />
                </Card>
                <Card id="welcome_users">
                    <Paragraph id="welcome_users_0" />
                    <Paragraph id="welcome_users_1" />
                    <Paragraph id="welcome_users_2" />
                    <Paragraph id="welcome_users_3" />
                    <List>
                        <Item id="welcome_users_4a" />
                        <Item id="welcome_users_4b" />
                        <Item id="welcome_users_4c" />
                        <Item id="welcome_users_4d" />
                        <Item id="welcome_users_4e" />
                    </List>
                </Card>
                <Card id="welcome_developers">
                    <Paragraph id="welcome_developers_0" />
                    <Paragraph id="welcome_developers_1" />
                    <Paragraph id="welcome_developers_2" />
                    <Paragraph id="welcome_developers_3" />
                    <List>
                        <Item id="welcome_developers_4a" />
                        <Item id="welcome_developers_4b" />
                        <Item id="welcome_developers_4c" />
                        <Item id="welcome_developers_4d" />
                        <Item id="welcome_developers_4e" />
                    </List>
                </Card>
                <Card id="welcome_supporters">
                    <Paragraph id="welcome_supporters_0" />
                    <Paragraph id="welcome_supporters_1" />
                    <Paragraph id="welcome_supporters_2" />
                    <Paragraph id="welcome_supporters_3" />
                    <List>
                        <Item id="welcome_supporters_4a" />
                        <Item id="welcome_supporters_4b" />
                        <Item id="welcome_supporters_4c" />
                        <Item id="welcome_supporters_4d" />
                        <Item id="welcome_supporters_4e" />
                    </List>
                </Card>
            </Cards>
        </Page>
    )
}
