import React from "react"

import { Page, Card, Paragraph, Image, Columns } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="welcome">
            <Card id="welcome_users">
                <Paragraph id="welcome_users0" />
                <Paragraph id="welcome_users1" />
                <Paragraph id="welcome_users2" />
                <Paragraph id="welcome_users3" />
                <Paragraph id="welcome_users4" />
            </Card>
            <Card id="welcome_supporters">
                <Paragraph id="welcome_supporters0" />
                <Paragraph id="welcome_supporters1" />
                <Paragraph id="welcome_supporters2" />
                <Paragraph id="welcome_supporters3" />
                <Paragraph id="welcome_supporters4" />
            </Card>
            <Card id="welcome_contributors">
                <Paragraph id="welcome_contributors0" />
                <Paragraph id="welcome_contributors1" />
                <Paragraph id="welcome_contributors2" />
                <Paragraph id="welcome_contributors3" />
                <Paragraph id="welcome_contributors4" />
            </Card>
            <Card id="welcome_technology">
                <Paragraph id="welcome_technology1" />
                <Paragraph id="welcome_technology2" />
                <Paragraph id="welcome_technology3" />
                <Paragraph id="welcome_technology4" />
            </Card>
            <Card id="welcome_solution">
                <Paragraph id="welcome_solution1" />
                <Paragraph id="welcome_solution2" />
                <Paragraph id="welcome_solution3" />
                <Paragraph id="welcome_solution4" />
            </Card>
            <Card id="welcome_project">
                <Paragraph id="welcome_project1" />
                <Paragraph id="welcome_project2" />
                <Paragraph id="welcome_project3" />
                <Paragraph id="welcome_project4" />
            </Card>
        </Page>
    )
}
