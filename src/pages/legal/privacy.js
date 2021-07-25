import React from "react"

import { Page, Card, Section, Paragraph, Line, List, Item } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="legal_privacy_heading">
            <Card id="legal_privacy_a">
                <Paragraph id="legal_privacy_a1" />
                <Paragraph id="legal_privacy_a2" />
                <Paragraph id="legal_privacy_a3" />
                <Paragraph id="legal_privacy_a4" />
                <Paragraph>
                    <Line id="legal_privacy_b" /><br />
                    <Line id="legal_privacy_c" /><br />
                    <Line id="legal_privacy_d" />
                </Paragraph>
            </Card>
            <Card id="legal_privacy_b">
                <Paragraph id="legal_privacy_b1" />
                <Paragraph>
                    <Line id="legal_privacy_b2" /><br />
                    <Line id="legal_privacy_b3" /><br />
                    <Line id="legal_privacy_b4" /><br />
                    <Line id="legal_privacy_b5" />
                </Paragraph>
                <Paragraph>
                    <Line id="legal_privacy_b6" /><br />
                    <Line id="legal_privacy_b7" /><br />
                    <Line id="legal_privacy_b8" />
                </Paragraph>
            </Card>
            <Card id="legal_privacy_c">
                <Paragraph id="legal_privacy_c1" />
                <List>
                    <Item id="legal_privacy_c2" />
                    <Item id="legal_privacy_c3" />
                    <Item id="legal_privacy_c4" />
                    <Item id="legal_privacy_c5" />
                    <Item id="legal_privacy_c6" />
                </List>
                <Paragraph id="legal_privacy_c7" />
                <Paragraph id="legal_privacy_c8" />
            </Card>
            <Card id="legal_privacy_d">
                <Paragraph id="legal_privacy_d1" />
                <Section id="legal_privacy_d2" />
                <Paragraph id="legal_privacy_d3" />
                <Paragraph id="legal_privacy_d4" />
                <Paragraph id="legal_privacy_d5" />
                <Paragraph id="legal_privacy_d6" />
                <Section id="legal_privacy_d7" />
                <Paragraph id="legal_privacy_d8" />
                <Section id="legal_privacy_d9" />
                <Paragraph id="legal_privacy_d10" />
                <Paragraph id="legal_privacy_d11" />
                <Paragraph id="legal_privacy_d12" />
            </Card>
            <p>
                <Line id="legal_privacy_footer" />
            </p>
        </Page>
    )
}
