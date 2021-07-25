import React from "react"

import { Page, Card, Paragraph } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="contributors_beliefs">
            <Card>
                <Paragraph id="contributors_beliefs_collaboration" />
                <Paragraph id="contributors_beliefs_privacy" />
                <Paragraph id="contributors_beliefs_transformation" />
                <Paragraph id="contributors_beliefs_decentral" />
                <Paragraph id="contributors_beliefs_accessibiliy" />
            </Card>
        </Page>
    )
}
