import React from "react"

import { Page, Card, Paragraph } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="contributors_resources">
            <Card id="contributors_resources_github">
                <Paragraph id="contributors_resources_github1" />
            </Card>
            <Card id="contributors_resources_slack">
                <Paragraph id="contributors_resources_slack1" />
            </Card>
            <Card id="contributors_resources_literature">
                <Paragraph id="contributors_resources_literature1" />
            </Card>
        </Page>
    )
}
 
