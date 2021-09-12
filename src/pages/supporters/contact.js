import React from "react"

import { Page, Card, Paragraph, Line } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="contact">
            <Card id="contact_coordinator">
                <Paragraph>
                    <Line id="contact_coordinator_1" /><br />
                    <Line id="contact_coordinator_2" />
                </Paragraph>
            </Card>
            <Card id="contact_communitymanager">
                <Paragraph>
                    <Line id="contact_communitymanager_1" /><br />
                    <Line id="contact_communitymanager_2" />
                </Paragraph>
            </Card>
        </Page>
    )
}
