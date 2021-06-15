import React from "react"

import { Page, Card, Paragraph, Citation } from "../../components/Elements"

export default function License() {
    return (
        <Page id="resources_license">
            <Card id="resources_license_a">
                <Paragraph id="resources_license_a1" />
                <Paragraph id="resources_license_a2" />
                <Paragraph id="resources_license_a3" />
            </Card>
            <Card id="resources_license_b">
                <Paragraph id="resources_license_b1" />
                <Citation id="resources_license_b2">
                    <Paragraph id="resources_license_b3" />
                </Citation>
                <Paragraph id="resources_license_b4" />
                <Paragraph id="resources_license_b5" />
            </Card>
        </Page>
    )
}
