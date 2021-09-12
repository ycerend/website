import React from "react"

import { Page, Card, Paragraph, GreyButton, ExternalLink, List, Item } from "/src/components/Elements"

export default function Layout() {
    return (
        <Page id="resources">
            <Card id="resources_support">
                <Paragraph id="resources_support_1" />
                <GreyButton>
                    <ExternalLink url="mailto:support@fdrtd.com" text="support@fdrtd.com" />
                </GreyButton>
            </Card>
            <Card id="resources_sourcecode">
                <Paragraph id="resources_sourcecode_1" />
            </Card>
            <Card id="resources_documentation">
                <Paragraph id="resources_documentation_1" />
            </Card>
            <Card id="resources_slack">
                <Paragraph id="resources_slack_1" />
            </Card>
            <Card id="resources_literature">
                <Paragraph id="resources_literature_1" />
            </Card>
        </Page>
    )
}
