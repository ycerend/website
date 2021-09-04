import React from "react"

import { Page, Card, Paragraph, Image, Columns } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="welcome">
            <Card id="elevatorpitch">
                <Paragraph id="elevatorpitch_why" />
                <Paragraph id="elevatorpitch_how" />
                <Paragraph id="elevatorpitch_what" />
                <Paragraph id="elevatorpitch_who" />
            </Card>
        </Page>
    )
}
