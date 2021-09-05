import React from "react"

import { Page, Card, Paragraph } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="contributors_why">
            <Card id="contributors_why_beliefs">
                <Paragraph id="contributors_why_beliefs1" />
                <Paragraph id="contributors_why_beliefs2" />
                <Paragraph id="contributors_why_beliefs3" />
                <Paragraph id="contributors_why_beliefs4" />
                <Paragraph id="contributors_why_beliefs5" />
            </Card>
            <Card id="contributors_why_mission">
                <Paragraph id="contributors_why_mission1" />
                <Paragraph id="contributors_why_mission2" />
                <Paragraph id="contributors_why_mission3" />
                <Paragraph id="contributors_why_mission4" />
                <Paragraph id="contributors_why_mission5" />
            </Card>
        </Page>
    )
}
