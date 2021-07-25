import React from "react"

import { Page, Card, Section, Paragraph, Line } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="legal_contact_heading">
            <Card id="legal_contact_a">
                <Paragraph>
                    <Line id="legal_contact_a1" /><br />
                    <Line id="legal_contact_a2" /><br />
                    <Line id="legal_contact_a3" /><br />
                    <Line id="legal_contact_a4" />
                </Paragraph>
                <Paragraph>
                    <Line id="legal_contact_a5" /><br />
                    <Line id="legal_contact_a6" /><br />
                    <Line id="legal_contact_a7" />
                </Paragraph>
                <Section id="legal_contact_a8" />
                <Paragraph id="legal_contact_a9" />
                <Section id="legal_contact_a10" />
                <Paragraph id="legal_contact_a11" />
                <Section id="legal_contact_a12" />
                <Paragraph id="legal_contact_a13" />
            </Card>
        </Page>
    )
}
