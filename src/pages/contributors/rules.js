import React from "react"

import { Page, Card, Paragraph, Citation } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="contributors_rules">
            <Card id="contributors_rules_license">
                <Paragraph id="contributors_rules_license1" />
                <Paragraph id="contributors_rules_license2" />
                <Paragraph id="contributors_rules_license3" />
            </Card>
            <Card id="contributors_rules_contributions">
                <Paragraph id="contributors_rules_contributions1" />
                <Citation id="contributors_rules_contributions2">
                    <Paragraph id="contributors_rules_contributions3" />
                </Citation>
                <Paragraph id="contributors_rules_contributions4" />
                <Paragraph id="contributors_rules_contributions5" />
            </Card>
            <Card id="contributors_rules_styleguide">
            <Paragraph id="contributors_rules_styleguide_python" />
            <Paragraph id="contributors_rules_styleguide_python1" />
            </Card>
        </Page>
    )
}
