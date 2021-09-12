import React from "react"

import { Page, Card, Paragraph, Citation } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="contribute">
            <Card id="contribute_license">
                <Paragraph id="contribute_license1" />
                <Paragraph id="contribute_license2" />
                <Paragraph id="contribute_license3" />
            </Card>
            <Card id="contribute_contributions">
                <Paragraph id="contribute_contributions1" />
                <Citation id="contribute_contributions2">
                    <Paragraph id="contribute_contributions3" />
                </Citation>
                <Paragraph id="contribute_contributions4" />
                <Paragraph id="contribute_contributions5" />
            </Card>
            <Card id="contribute_styleguide">
            <Paragraph id="contribute_styleguide_python" />
            <Paragraph id="contribute_styleguide_python1" />
            </Card>
            <Card id="contribute_vulnerabilities" style={{color: 'red'}}>
                <Paragraph id="contribute_vulnerabilities_1" />
            </Card>
        </Page>
    )
}
