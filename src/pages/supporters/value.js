import React from "react"

import { Page, Card, Paragraph, List, Item } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="supporters_value">
            <Card id="supporters_value_painpoints">
                <Paragraph id="supporters_value_painpoints1" />
                <List>
                    <Item id="supporters_value_painpoints1a" />
                    <Item id="supporters_value_painpoints1b" />
                    <Item id="supporters_value_painpoints1c" />
                </List>
                <Paragraph id="supporters_value_painpoints2" />
                <List>
                    <Item id="supporters_value_painpoints2a" />
                    <Item id="supporters_value_painpoints2b" />
                    <Item id="supporters_value_painpoints2c" />
                </List>
                <Paragraph id="supporters_value_painpoints3" />
                <List>
                    <Item id="supporters_value_painpoints3a" />
                    <Item id="supporters_value_painpoints3b" />
                    <Item id="supporters_value_painpoints3c" />
                </List>
            </Card>
            <Card id="supporters_value_proposition">
                <Paragraph id="users_benefit_empowerment" />
                <List>
                    <Item id="users_benefit_empowerment1a" />
                    <Item id="users_benefit_empowerment1b" />
                    <Item id="users_benefit_empowerment1c" />
                </List>
                <Paragraph id="users_benefit_convenience" />
                <List>
                    <Item id="users_benefit_convenience1a" />
                    <Item id="users_benefit_convenience1b" />
                    <Item id="users_benefit_convenience1c" />
                    <Item id="users_benefit_convenience1d" />
                </List>
                <Paragraph id="users_benefit_compatibility" />
                <List>
                    <Item id="users_benefit_compatibility1a" />
                    <Item id="users_benefit_compatibility1b" />
                    <Item id="users_benefit_compatibility1c" />
                </List>
            </Card>
            <Card id="supporters_value_beneficiaries">
                <Paragraph id="supporters_value_beneficiaries1" />
                <Paragraph id="supporters_value_beneficiaries2" />
                <Paragraph id="supporters_value_beneficiaries3" />
                <Paragraph id="supporters_value_beneficiaries4" />
                <Paragraph id="supporters_value_beneficiaries5" />
            </Card>
        </Page>
)
}
