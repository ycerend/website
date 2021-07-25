import React from "react"

import { Page, Card, Paragraph } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="about">
            <Card id="about_project">
                <Paragraph id="about_project1" />
            </Card>
            <Card id="about_begin">
                <Paragraph id="about_begin1" />
                <Paragraph id="about_begin2" />
                <Paragraph id="about_begin3" />
            </Card>
            <Card id="about_community">
                <Paragraph id="about_community1" />
                <Paragraph id="about_community2" />
            </Card>
        </Page>
    )
}
