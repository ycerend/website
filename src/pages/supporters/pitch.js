import React from "react"

import { Page, Card, Paragraph, GreyButton, ExternalLink, List, Item } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="pitch">
            <Card id="pitch_beliefs">
                <Paragraph id="pitch_beliefs1" />
                <Paragraph id="pitch_beliefs2" />
                <Paragraph id="pitch_beliefs3" />
                <Paragraph id="pitch_beliefs4" />
                <Paragraph id="pitch_beliefs5" />
            </Card>
            <Card id="pitch_mission">
                <Paragraph id="pitch_mission1" />
                <Paragraph id="pitch_mission2" />
                <Paragraph id="pitch_mission3" />
                <Paragraph id="pitch_mission4" />
                <Paragraph id="pitch_mission5" />
            </Card>
        </Page>
    )
}
