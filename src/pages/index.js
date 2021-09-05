import React from "react"

import { Page, Card, Paragraph, Image, Columns } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="welcome">
            <h2>elevator pitch</h2>
            <Card id="welcome_why_users">
                <Paragraph id="welcome_why_users0" />
                <Paragraph id="welcome_why_users1" />
                <Paragraph id="welcome_why_users2" />
                <Paragraph id="welcome_why_users3" />
                <Paragraph id="welcome_why_users4" />
            </Card>
            <Card id="welcome_why_supporters">
                <Paragraph id="welcome_why_supporters0" />
                <Paragraph id="welcome_why_supporters1" />
                <Paragraph id="welcome_why_supporters2" />
                <Paragraph id="welcome_why_supporters3" />
                <Paragraph id="welcome_why_supporters4" />
            </Card>
            <Card id="welcome_why_contributors">
                <Paragraph id="welcome_why_contributors0" />
                <Paragraph id="welcome_why_contributors1" />
                <Paragraph id="welcome_why_contributors2" />
                <Paragraph id="welcome_why_contributors3" />
                <Paragraph id="welcome_why_contributors4" />
            </Card>
        </Page>
    )
}
